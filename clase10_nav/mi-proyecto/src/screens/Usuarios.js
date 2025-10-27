
import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { db } from '../firebase/config';

class Usuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
      loading: true,
    };
  }

  componentDidMount() {
    db.collection('users').onSnapshot(docs => {
      let users = [];
      docs.forEach(doc => {
        users.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      this.setState(
        { usuarios: users, loading: false },
        () => console.log('Estado usuarios:', this.state.usuarios)
      );
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Text>Cargando usuarios...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Usuarios</Text>

        <FlatList
          data={this.state.usuarios}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.userItem}>
              <Text style={styles.email}>
                {item.data.owner || item.data.email}
              </Text>
              {item.data.username ? (
                <Text>Usuario: {item.data.username}</Text>
              ) : null}
            </View>
          )}
          ListEmptyComponent={<Text>No hay usuarios aún.</Text>}
        />
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
  userItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  email: {
    fontWeight: 'bold',
  },
};

export default Usuarios;
