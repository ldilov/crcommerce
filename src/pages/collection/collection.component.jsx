import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectRoutedCollection } from '../../redux/shop/shop.selectors';
import {
  CollectionItemContainer,
  CollectionPageContainer,
  CollectionTitle,
  Items
} from './collection.styles';

const CollectionPage = () => {
  const { categoryId } = useParams();

  const { title, items } = useSelector(selectRoutedCollection(categoryId));
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <Items>
        {items.map((item) => (
          <CollectionItemContainer key={item.id} item={item} />
        ))}
      </Items>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
