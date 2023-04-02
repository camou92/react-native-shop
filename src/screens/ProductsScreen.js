//import liraries
import React, { Component } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import products from "../data/products";
import { useDispatch, useSelector } from "react-redux";
import { productsSlice } from "../store/productsSlice";

// create a component
const ProductsScreen = ({ navigation }) => {

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            // update selected product 
            dispatch(productsSlice.actions.setSelectedProduct(item.id))
            navigation.navigate("Product Details")
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

//make this component available to the app
export default ProductsScreen;
