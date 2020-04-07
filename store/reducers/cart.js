import { ADD_TO_CART } from "../actions/cart";
import CartItem from '../models/cart-item';

const initialState = {
   items: {},
   totalAmount: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addexProduct.price;
            const prodTitle = addedProduct.title; 

            if (state.items[addedProduct.id]) {
                // already have the item in the cart
                const updatedCartItem = new CartItem(
                    state.items[addedProduct.id].quantity
                );
            } else {
              const newCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
              return {
                ...state,
                items: { ...state.items, [addedProduct.id]: newCartItem }
            }     
        }
    }
    return state;
};