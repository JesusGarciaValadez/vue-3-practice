import type { Ref } from 'vue'

type Pokedex = {
  pokedex: Ref<Array<String>>,
  fetchAll: () => Promise<void>,
  fetchOne: (pokemon: String) => Promise<void>,
};

export default Pokedex
