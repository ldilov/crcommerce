import memoize from 'lodash.memoize';
import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop.collections);

export const selectCollectionsForPreview = createSelector([selectCollections], (collections) =>
  collections ? collections.collections : []
);

export const selectRoutedCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) => {
    return collections ? collections.collections[collectionUrlParam] : null;
  })
);

export const selectIsCollectionFetching = createSelector([selectShop], (shop) => shop.isFetching);

export const selectIsCollectionLoaded = createSelector([selectShop], (shop) => !!shop.collections);
