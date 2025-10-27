// src/components/Post.js
import React from 'react';
import { View, Text } from 'react-native';

function Post(props) {
  const data = props.data || {};
  const email = data.owner || data.email;
  const username = data.username;
  const texto = data.text;

  return (
    <View style={styles.item}>
      <Text style={styles.text}>{texto}</Text>
      <Text style={styles.meta}>
        {username ? `Por ${username} (${email})` : `Por ${email}`}
      </Text>
    </View>
  );
}

const styles = {
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
  meta: {
    fontSize: 12,
    color: '#666',
  },
};

export default Post;
