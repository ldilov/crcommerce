import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../hocs/with-spinner/with-spinner.component';
import OverviewCollections from './overview-collections.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const OverviewCollectionsContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(OverviewCollections);

export default OverviewCollectionsContainer;
