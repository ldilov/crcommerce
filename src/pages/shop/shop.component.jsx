import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectCollections } from '../../redux/shop/shop.selectors';

// Components
import '../../components/preview-collection/preview-collection.component';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

const ShopPage = ({ collections }) => {
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
