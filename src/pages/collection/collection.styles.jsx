import styled from 'styled-components';
import PreviewItem from '../../components/preview-item/preview-item.component';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const CollectionItemContainer = styled(PreviewItem)`
  margin-bottom: 20px;
`;
