import React from 'react';
import { 
  createStackNavigator, 
  createDrawerNavigator, 
  createAppContainer 
} from 'react-navigation';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import Colors from '../constants/Colors';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
      fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
      fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white': Colors.primary 
 };

const ProductsNavigator = createStackNavigator (
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetailScreen: ProductDetailScreen,
    Cart: CartScreen
  },
  {
    navgationOptions: {
      drawerIcon: drawerConfig => (
         <Ionicons 
           name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
           size={23} 
           color={drawerConfig.tintColor}
       />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }  
);

const OrdersNavigator = createStackNavigator(
   {
    Orders: OrdersScreen
   },
   {
     navgationOptions: {
       drawerIcon: drawerConfig => (
          <Ionicons 
            name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
            size={23} 
            color={drawerConfig.tintColor}
        />
       )
     },
    defaultNavigationOptions: defaultNavOptions
  }
);

const ShopNavigator = createDrawerNavigator({
    Producs: ProductsNavigator,
    Orders: OrderNavigator
}, {
     contentOptions: {
       activeTintColor: Colors.primary
   }
});

export default createAppContainer(ShopNavigator);