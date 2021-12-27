import { ACTION_TYPES } from './cart.constants';

export const setCartHidden = () => ({
  type: ACTION_TYPES.SET_CART_HIDDEN,
  payload: null
});

export const toggleCartHidden = () => ({
  type: ACTION_TYPES.TOGGLE_CART_HIDDEN,
  payload: null
});

export const addItem = (item) => ({
  type: ACTION_TYPES.ADD_ITEM,
  payload: item
});

export const removeItem = (item) => ({
  type: ACTION_TYPES.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const decreaseQuantity = (item) => ({
  type: ACTION_TYPES.DECREASE_QUANTITY,
  payload: item
});
