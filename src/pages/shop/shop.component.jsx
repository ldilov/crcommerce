import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

// Components
import OverviewCollections from '../../components/overview-collections/overview-collections.component';
import CollectionPage from '../collection/collection.component';

// service
import CollectionsService from '../../data/services/collections.service';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/hocs/with-spinner/with-spinner.component';

const OverviewCollectionsWithSpinner = WithSpinner(OverviewCollections);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ updateCollections }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    CollectionsService.setOnCollectionChangeHandler((collections) => {
      updateCollections(collections);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    });
    return () => CollectionsService.destroyOnCollectionChangeHandler();
  }, []);

  return (
    <div className='shop-page'>
      <Routes>
        <Route
          element={<OverviewCollectionsWithSpinner isLoading={isLoading} />}
          exact
          path={`/`}
        />
        <Route
          element={<CollectionPageWithSpinner isLoading={isLoading} />}
          path={`/:categoryId`}
        />
      </Routes>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);
