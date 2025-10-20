import React from 'react';
import { Pressable, View, Text } from 'react-native';

function Login(props) {
  return (
    <View style={styles.view1}>
      <Text>Login</Text>

      <Pressable style={styles.botones} onPress={() => props.navigation.navigate('Register')}>
        <Text>Ir al registro</Text>
      </Pressable>

      <Pressable style={styles.botones2} onPress={() => props.navigation.navigate('HomeMenu')}>
        <Text>Entrar en la app</Text>
      </Pressable>
    </View>
  );
}

const styles = {
  view1: {
    textAlign: 'center',
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
    botones: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  botones2: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'pink',
    borderRadius: 5,
  },
};

export default Login;