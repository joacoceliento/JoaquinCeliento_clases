import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-web";

function Card(props) {
    return ( 
        <View style={styles.card}>
          <FlatList data={props.productos}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.cardItem}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardPrice}>${item.price}</Text>
              </View>
            )}
          />
        </View>
     );
}
const styles = StyleSheet.create({
    card: {
      marginTop: 20,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        width: '90%'
    }
});

export default Card;