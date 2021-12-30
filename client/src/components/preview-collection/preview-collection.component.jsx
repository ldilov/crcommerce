import { useMemo } from "react";

import PreviewItem from "../preview-item/preview-item.component";
import { Preview, PreviewContainer, Title } from "./preview-collection.styles";

const MAX_PREVIEW_ITEMS = 4;

const PreviewCollection = ({ title, items }) => {
  const previewItems = useMemo(() => {
    return items.filter((item, index) => index < MAX_PREVIEW_ITEMS)
            .map((item) => <PreviewItem key={item.id} item={item} />);
  }, []);

  return (
          <PreviewContainer>
            <Title>{title.toUpperCase()}</Title>
            <Preview>{previewItems}</Preview>
          </PreviewContainer>
  );
};

export default PreviewCollection;
