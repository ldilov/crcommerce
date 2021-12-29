import { ACTION_TYPES } from './shop.constants';

export const fetchCollectionsStart = () => ({
  type: ACTION_TYPES.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collections) => ({
  type: ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
});

export const fetchCollectionsError = (err) => ({
  type: ACTION_TYPES.FETCH_COLLECTIONS_FAILURE,
  payload: err
});
