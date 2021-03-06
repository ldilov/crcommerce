import { ACTION_TYPES, INITIAL_STATE } from './shop.constants';

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case ACTION_TYPES.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
