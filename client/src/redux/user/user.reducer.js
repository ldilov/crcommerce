import { ACTION_TYPES, INITIAL_STATE } from './user.constants';

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case ACTION_TYPES.SIGN_IN_FAILURE:
      console.log('HERE');
      return {
        ...state,
        currentUser: null,
        error: action.payload
      };
    case ACTION_TYPES.SIGN_OUT:
      return {
        ...state,
        currentUser: null
      };
    default:
      return state;
  }
};

export default userReducer;
