import './collection.styles.scss';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectRoutedCollection } from '../../redux/shop/shop.selectors';
import PreviewItem from '../../components/preview-item/preview-item.component';

const CollectionPage = () => {
  const { categoryId } = useParams();
  const { title, items } = useSelector(selectRoutedCollection(categoryId));

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <PreviewItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
