import { ACTION_TYPES } from './shop.constants';

export const updateCollections = (collections) => {
  return {
    type: ACTION_TYPES.UPDATE_COLLECTIONS,
    payload: collections
  };
};
