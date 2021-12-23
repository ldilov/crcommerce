import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import PreviewCollection from '../preview-collection/preview-collection.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { OverviewContainer } from './overview-collections.styles';

const OverviewCollections = ({ collections }) => {
  return (
    <OverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </OverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(OverviewCollections);
