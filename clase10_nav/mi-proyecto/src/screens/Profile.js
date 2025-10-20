import React from 'react';
import { View, Text, Pressable } from 'react-native';

function Profile(props) {
  return (
    <View style={styles.view1}>
      <Text>Profile</Text>

      <Pressable style={styles.botones} onPress={() => props.navigation.navigate('Login')}>
        <Text>Desloguearse</Text>
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

export default Profile;
