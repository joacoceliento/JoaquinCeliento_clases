import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { db } from '../firebase/config';
import Post from '../components/Post';
import DynamicForm from '../components/DynamicForm';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
    };
  }

  componentDidMount() {
    // Trae los posteos de Firebase en tiempo real
    db.collection('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot(docs => {
        let postsArray = [];
        docs.forEach(doc => {
          postsArray.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        this.setState(
          { posts: postsArray, loading: false },
          () => console.log('Posts en estado:', this.state.posts)
        );
      });
  }

  render() {
    return (
      <View style={styles.view1}>
        <Text style={styles.title}>Este es Home</Text>

        <DynamicForm />

        <Text style={styles.subtitle}>Posts:</Text>

        {this.state.loading ? (
          <Text>Cargando posteos...</Text>
        ) : (
          <FlatList
            data={this.state.posts}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Post data={item.data} />}
            ListEmptyComponent={<Text>No hay posts aún.</Text>}
          />
        )}
      </View>
    );
  }
}

const styles = {
  view1: {
    textAlign: 'center',
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
};

export default Home;

