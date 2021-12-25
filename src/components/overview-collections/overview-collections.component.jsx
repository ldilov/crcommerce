import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { useMemo } from 'react';

import PreviewCollection from '../preview-collection/preview-collection.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import { OverviewContainer } from './overview-collections.styles';

const OverviewCollections = ({ collections }) => {
  const overviewCollections = useMemo(
    () =>
      Object.entries(collections).map(([key, collection]) => {
        const { id, ...otherCollectionProps } = collection;
        return <PreviewCollection key={`${key}_${id}`} {...otherCollectionProps} />;
      }),
    [collections]
  );

  return <OverviewContainer>{overviewCollections}</OverviewContainer>;
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(OverviewCollections);
