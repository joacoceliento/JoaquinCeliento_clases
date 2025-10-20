import React from 'react';
import { View, Text } from 'react-native';

function Home(props) {
  return (
    <View style={styles.view1}>
      <Text>Este es Home</Text>
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
};

export default Home;
