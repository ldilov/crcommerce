import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Suspense, useMemo } from "react";
import { lazy } from "@loadable/component";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import { OverviewContainer } from "./overview-collections.styles";

const LazyPreviewCollection = lazy(() => import("../preview-collection/preview-collection.component"));

const OverviewCollections = ({ collections }) => {
  const overviewCollections = useMemo(
          () =>
                  Object.entries(collections).map(([key, collection]) => {
                    const { id, ...otherCollectionProps } = collection;
                    return (<Suspense key={`${key}_${id}`} fallback={<div>Loading</div>}><LazyPreviewCollection
                            {...otherCollectionProps} /></Suspense>);
                  }),
          [collections]
  );

  return <OverviewContainer>{overviewCollections}</OverviewContainer>;
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(OverviewCollections);
