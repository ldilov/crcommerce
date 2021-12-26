import { ACTION_TYPES } from './shop.constants';
import CollectionsService from '../../data/services/collections.service';

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

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchCollectionsStart());
    setTimeout(() => {
      CollectionsService.getCollectionSnapshot()
        .then((collections) => {
          dispatch(fetchCollectionsSuccess(collections));
        })
        .catch((err) => dispatch(fetchCollectionsError(err)));
    }, 300);
  };
};
