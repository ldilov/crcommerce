import LazyLoader from '../helpers/LazyLoader';
import CollectionResponseDTO from '../dtos/collection-response.dto';

const FirebaseDB = {
  module: () => import('../firebase/db')
};

const load = new LazyLoader(FirebaseDB).import;

class CollectionsService {
  #collectionsStateSubscription;

  constructor() {
    this.#collectionsStateSubscription = null;
  }

  async setOnCollectionChangeHandler(callback) {
    const getCollectionsOnSnapshot = await load('getCollecitonOnSnapshot');

    this.#collectionsStateSubscription = getCollectionsOnSnapshot((col) => {
      const collectionsResponse = col.docs.map((el) => ({
        data: el.data(),
        id: el.id
      }));

      const collections = new CollectionResponseDTO(collectionsResponse);

      callback(collections);
    });
  }

  destroyOnCollectionChangeHandler() {
    if (this.#collectionsStateSubscription) {
      this.#collectionsStateSubscription();
    }
  }
}

const service = new CollectionsService();
export default service;
