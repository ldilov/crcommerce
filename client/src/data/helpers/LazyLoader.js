class LazyLoader {
  #importMap = {};

  constructor(importMap) {
    this.#importMap = importMap;
  }

  import = async (obj = {}) => {
    if (typeof this.#importMap.module === 'function') {
      this.#importMap.module = await this.#importMap.module();
    }

    return this.#importMap?.module?.[obj];
  };
}

export default LazyLoader;
