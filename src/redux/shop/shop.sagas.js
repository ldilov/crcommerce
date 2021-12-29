import { put, takeEvery } from 'redux-saga/effects';

import CollectionsService from '../../data/services/collections.service';

import { ACTION_TYPES } from './shop.constants';
import { fetchCollectionsError, fetchCollectionsSuccess } from './shop.actions';

export function* fetchCollectionsAsync() {
  try {
    const collections = yield CollectionsService.getCollectionSnapshot();
    yield put(fetchCollectionsSuccess(collections));
  } catch (error) {
    yield fetchCollectionsError(error.message);
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(ACTION_TYPES.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
