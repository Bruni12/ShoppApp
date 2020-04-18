import React from 'react';
import { FlatList, Text, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import OrderItem from '../../components/shop/OrderItem';

const OrderScreen = props => {
    const orders = useSelector(state => state.orders.orders);

    return ( 
      <FlatList 
        date={orders} 
        keyExtractor={item => item.id}  
        renderItem={itemData => (
          <OrderItem 
           amount={itemData.item.totalAmount} 
           date={itemData.item.readabledate} 
        />
      )}
    />
  );
};

OrdersScreen.NavigationOptions = navData => {
    return {
      headerTitle: 'Your Orders',
      headerLeft: (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconsName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => {
                navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
    };
   };

export default OrderScreen; 