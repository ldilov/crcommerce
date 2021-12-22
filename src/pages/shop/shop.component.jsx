import { Route, Routes } from 'react-router-dom';

// Components
import OverviewCollections from '../../components/overview-collections/overview-collections.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = () => {
  return (
    <div className='shop-page'>
      <Routes>
        <Route element={<OverviewCollections />} exact path={`/`} />
        <Route element={<CollectionPage />} path={`/:categoryId`} />
      </Routes>
    </div>
  );
};

export default ShopPage;
