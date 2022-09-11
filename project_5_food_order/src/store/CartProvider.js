import React,{useReducer} from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,

};

const cartReducer = (state, action) =>{
  console.log("reached hre reduceer",action)
  switch(action.type) {
    case 'ADD_ITEM':

      const updatedItems = state.items.concat(action.item)
      const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount)
      return {items: updatedItems, totalAmount: updatedTotalAmount} 
    case 'REMOVE_ITEM':
      // code block
      break;
    default:
      // code block
  }
  return defaultCartState
};

const CartProvider = (props) => {
  
  const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState)
  
  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD_ITEM', item: item});
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE_ITEM', id: id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
