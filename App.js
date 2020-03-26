import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './store/reducers/products';

const rootReducer = combineReducer({
  products: productsreducer
});

const store =createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <View>...</View>
    </Provider>
  );
}