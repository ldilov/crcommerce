import { INITIAL_STATE, ACTION_TYPES } from './cart.constants';

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ACTION_TYPES.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		default:
			return state;
	}
};

export default cartReducer;
