import CollectionItemDTO from './collection-item.dto';

class CollectionDTO {
  constructor(collection) {
    const { data, id } = collection;
    this.id = id;

    this.#build(data);
  }

  #build = ({ items, title }) => {
    this.items = items.map((item) => new CollectionItemDTO(item));
    this.title = title;
    this.routeName = encodeURI(title.toLowerCase());
  };
}

export default CollectionDTO;
