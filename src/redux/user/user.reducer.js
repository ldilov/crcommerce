import { ACTION_TYPES, INITIAL_STATE } from './user.constants';

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ACTION_TYPES.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
