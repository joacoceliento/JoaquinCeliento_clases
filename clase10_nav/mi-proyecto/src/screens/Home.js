import React from 'react';
import { View, Text } from 'react-native';
import DynamicForm from '../components/DynamicForm';

function Home() {
  return (
    <View style={styles.view1}>
      <Text>Este es Home</Text>
      <DynamicForm />
    </View>
  );
}

const styles = {
  view1: {
    textAlign: 'center',
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
};

export default Home;
