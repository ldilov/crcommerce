import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';

// Actions
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// Containers
import OverviewCollectionsContainer from '../../components/overview-collections/overview-collections.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, []);

  return (
    <div className='shop-page'>
      <Routes>
        <Route element={<OverviewCollectionsContainer />} exact path={`/`} />
        <Route element={<CollectionPageContainer />} path={`/:categoryId`} />
      </Routes>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
