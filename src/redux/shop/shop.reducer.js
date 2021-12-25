import { ACTION_TYPES, INITIAL_STATE } from './shop.constants';

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
