import { ACTION_TYPES, INITIAL_STATE } from './user.constants';

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case ACTION_TYPES.GOOGLE_SIGN_IN_SUCCESS:
    case ACTION_TYPES.CREDENTIALS_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case ACTION_TYPES.GOOGLE_SIGN_IN_FAILURE:
    case ACTION_TYPES.CREDENTIALS_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
