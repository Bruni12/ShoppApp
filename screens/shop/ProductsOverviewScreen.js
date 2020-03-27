import React from 'react';
import {Flatlist, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
return (
  <Flatlist 
    data={products} 
    keyExtractor={item => item.id} 
    renderItem={itemData => <Text>{itemData.item.title}</Text>}
   />
  );
 };

 ProductsOverviewScreen.navigationOptions = {
     headerTitle: 'All Products'
 }

export default ProductsOverviewScreen;