import React from 'react';
import { Pressable, View, Text } from 'react-native';

function Register(props) {
  return (
    <View style={styles.view1}>
      <Text>Register</Text>

      <Pressable style={styles.botones} onPress={() => props.navigation.navigate('Login')}>
        <Text>Ir a Login</Text>
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
};

export default Register;
