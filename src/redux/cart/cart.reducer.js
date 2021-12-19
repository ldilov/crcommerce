import { ACTION_TYPES, INITIAL_STATE } from './cart.constants';
import { addItemToCart, decreaseItemQuantity } from './cart.utils';

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ACTION_TYPES.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case ACTION_TYPES.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id)
      };
    case ACTION_TYPES.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: decreaseItemQuantity(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
