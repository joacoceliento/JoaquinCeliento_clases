import React, { Component } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };
  }

  onSubmit() {
    console.log('Email:', this.state.email);
    console.log('Usuario:', this.state.username);
    console.log('Password:', this.state.password);
    this.props.navigation.navigate('HomeMenu');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Registro</Text>

        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="email"
          onChangeText={text => this.setState({ email: text })}
          value={this.state.email}
        />

        <TextInput
          style={styles.input}
          keyboardType="default"
          placeholder="username"
          onChangeText={text => this.setState({ username: text })}
          value={this.state.username}
        />

        <TextInput
          style={styles.input}
          keyboardType="default"
          placeholder="password"
          secureTextEntry={true}
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
        />

        <Pressable style={styles.button} onPress={() => this.onSubmit()}>
          <Text style={styles.buttonText}>Registrate</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style={styles.buttonText}>Ya tengo cuenta</Text>
        </Pressable>

        <View style={{ marginTop: 20 }}>
          <Text>Datos ingresados:</Text>
          <Text>Email: {this.state.email}</Text>
          <Text>Usuario: {this.state.username}</Text>
          <Text>Password: {this.state.password}</Text>
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
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
  },
};

export default Register;

