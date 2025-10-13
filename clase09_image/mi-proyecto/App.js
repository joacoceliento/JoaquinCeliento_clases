import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Agregando Imagenes</Text>
      <Image source={require('./assets/zonaMedia.jpeg')}
      style={styles.image}
      resizeMode='contain' />
      <Image source={{uri:'https://www.infobae.com/resizer/v2/CDTA65FYWMDLJV6AHKPIIPNOHU.jpg?auth=6c9f6791e78e189e11a8ff0474b608b95906885697189234ddcdee212e19f2bd&smart=true&width=992&height=661&quality=85'}}
      style={styles.image}
      resizeMode='contain' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    width: 700,
    height: 400,
    marginTop: 20,
  },
});
