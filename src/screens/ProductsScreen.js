//import liraries
import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import products from '../data/products'

// create a component
const ProductsScreen = () => {
    return (
        <FlatList
        data={products}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        )}
        numColumns={2}
       />
    );
};

// define your styles
const styles = StyleSheet.create({
    itemContainer: {
        width: '50%',
        padding: 1,
      },
      image: {
        width: '100%',
        aspectRatio: 1,
      }
});

//make this component available to the app
export default ProductsScreen;
