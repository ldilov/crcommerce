import CollectionDto from './collection.dto';

class CollectionResponseDTO {
  constructor(response) {
    const builtData = response.map((col) => new CollectionDto(col));
    this.collections = this.#normalize(builtData);
  }

  #normalize = (data) => {
    return data.reduce((accum, collection) => {
      accum[collection.title.toLowerCase()] = collection;
      return accum;
    }, {});
  };
}

export default CollectionResponseDTO;
