import { ACTION_TYPES } from './cart.constants';

export const toggleCartHidden = () => ({
  type: ACTION_TYPES.TOGGLE_CART_HIDDEN,
  payload: null
});

export const addItem = (item) => ({
  type: ACTION_TYPES.ADD_ITEM,
  payload: item
});
