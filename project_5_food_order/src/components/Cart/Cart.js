import React, {useContext} from "react";
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from "../../store/cart-context";

const Cart = (props) => {

  const cartCtx = useContext(CartContext);
  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)} caps`;
  const hasItem = cartCtx.items.length > 0;
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}><span>total</span><span>{totalAmount}</span></div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
