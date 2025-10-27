// src/screens/NuevoPost.js
import React, { Component } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { db, auth } from '../firebase/config';

class NuevoPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      error: '',
      posting: false,
      currentUsername: '', // opcional: lo tomamos de 'users'
    };
  }

  componentDidMount() {
    // Tomar el username del usuario actual (si existe en 'users')
    const email = auth.currentUser ? auth.currentUser.email : null;
    if (!email) return;

    db.collection('users')
      .where('owner', '==', email)
      .limit(1)
      .get()
      .then(query => {
        if (!query.empty) {
          const doc = query.docs[0];
          const data = doc.data();
          this.setState({ currentUsername: data.username || '' });
        }
      })
      .catch(() => {});
  }

  onSubmit() {
    if (!this.state.text) {
      this.setState({ error: 'Escribí un mensaje antes de publicar.' });
      return;
    }
    if (!auth.currentUser) {
      this.setState({ error: 'Debés iniciar sesión para postear.' });
      return;
    }

    this.setState({ posting: true, error: '' });

    db.collection('posts').add({
      text: this.state.text,
      owner: auth.currentUser.email,
      username: this.state.currentUsername, // puede venir vacío si no existe
      createdAt: Date.now(),
    })
    .then(() => {
      this.setState({ text: '', posting: false, error: '' });
      // Opcional: navegar a Home
      // this.props.navigation.navigate('HomeMenu');
    })
    .catch(() => {
      this.setState({ error: 'No se pudo crear el post.', posting: false });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Nuevo post</Text>

        <TextInput
          style={styles.input}
          placeholder="Escribí tu mensaje..."
          multiline={true}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />

        {!!this.state.error && <Text style={styles.error}>{this.state.error}</Text>}

        <Pressable style={styles.button} onPress={() => this.onSubmit()}>
          <Text style={styles.buttonText}>{this.state.posting ? 'Publicando...' : 'Publicar'}</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = {
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    minHeight: 80,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderRadius: 6,
    marginVertical: 10,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#28a745',
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#28a745',
    marginTop: 10,
  },
  buttonText: { color: '#fff' },
  error: { color: 'red', marginTop: 6 },
};

export default NuevoPost;
