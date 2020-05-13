import React, { useState, UseEffect, useCallback } from 'react';
import { 
  View,
  Text, 
  ScrollView, 
  TextInput, 
  StyleSheet, 
  Platform
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../../components/UI/HeaderButton';
import * as productsActions from '../../store/actions/products';

const EditProductScreen = props => {
    const prodId = props.navigation.getParam('productId');
      const editedProduct = useSelector(state =>
        state.products.userProducts.find(prod => prod.id === prodId)
        );
        const dispatch = useDispatch();

        const [title, setTitle] = useState(editedProduct ? editedProduct.title :'');
        const [imageUrl, setImageUrl] = useState(
          editedProduct ? editedProduct.imageUrl :''
        );
        const [price, setPrice] = useState('');
        const [description, setDescription] = useState(
          editedProduct ? editedProduct.description :''
        );

        const submitHandler = useCallback(() => {
          if (editedProduct) {
              dispatch(
                productsActions.updateProduct(prodId, title, description, imageUrl)
            );
          } else {
            dispatch(
              productsActions.createProduct(title, descriprion, imageUrl, +price)
            );
          }
          props.navigation.goBack();
        }, [dispatch, prodID, title, description, imageUrl, price]);

        useEffect(() => {
            props.navigation.setParams.setParams({submit: submitHandler })
        }, [submitHandler]);


    return (
     <ScrollView>
        <View style={styles.form}>
          <View style={styles.formControl}>
              <Text styles={styles.label}>Title</Text>
              <TextInput
              style={style.input} 
              value={title} 
              onChangeText={text => setTitle(text)} 
            />
          </View>
          <View style={styles.formControl}>
              <Text styles={styles.label}>Image URL</Text>
              <TextInput 
              style={style.input} 
              value={imageUrl}
              onChangeText={text => setImageUrl(text)}  
            />
          </View>
          {editedProduct ? null : (
           <View style={styles.formControl}>
              <Text styles={styles.label}>Price</Text>
              <TextInput 
              style={style.input} 
              value={price}
              onChangeText={text => setPrice(text)}  
            />
          </View>
          )}
          <View style={styles.formControl}>
              <Text styles={styles.label}>Description</Text>
              <TextInput 
              style={style.input} 
              value={description}
              onChangeText={text => setDescription(text)}  
              />
        </View>
    </View>
    </ScrollView> 
   );
 };
 
 EditProductScreen.navigationOptions = navData => {
     const submitFn = navData.navigation.getParam('submit');
   return {
     headerTitle: navData.navigation.getParam('productId') 
       ? 'Edit Product' 
       : 'Add Product',
       headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
       <Item
         title="Save"
         iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
         onPress={() => {
         }}
        onPress={submitFn}
     />
   </HeaderButtons>
   };
 };
 
const styles = StyleSheet.create({
  form: {
    margin: 20
  },
  formControl: {
    width: '100%'
  },
  label: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }
});

export default EditProductScreen;