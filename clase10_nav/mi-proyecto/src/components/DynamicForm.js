import React, { Component } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comentario: '',
    };
  }

  onSubmit() {
    console.log('comentario posteado:', this.state.comentario);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Comentarios</Text>

        <TextInput
          style={styles.input}
          keyboardType="default"
          placeholder="comentario"
          onChangeText={text => this.setState({ comentario: text })}
          value={this.state.comentario}
        />

        <Pressable style={styles.button} onPress={() => this.onSubmit()}>
          <Text style={styles.buttonText}>Postear comentario</Text>
        </Pressable>

        <View style={{ marginTop: 20 }}>
          <Text>Datos ingresados:</Text>
          <Text>Comentario: {this.state.comentario}</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  input: {
    height: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderRadius: 6,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#28a745',
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#28a745',
  },
  buttonText: {
    color: '#fff',
  },
};

export default DynamicForm;
