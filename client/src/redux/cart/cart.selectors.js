import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
  items.length > 0 ? items.reduce((accum, cartItem) => accum + cartItem.quantity, 0) : 0
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.length > 0 ? items.reduce((accum, value) => accum + value.quantity * value.price, 0) : 0
);
