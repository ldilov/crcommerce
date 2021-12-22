import memoize from 'lodash.memoize';
import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop.collections);

export const selectRoutedCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) => collections[collectionUrlParam])
);
