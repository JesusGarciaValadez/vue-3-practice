import { ref } from 'vue'
import type { Ref } from 'vue'
import type { Pokedex } from '../types/Pokedex'
import usePageRequest from '@/composables/usePageRequests'

export default function usePokedex():Pokedex {
  const pokedex: Ref<array<String>> = ref([]);
  const baseURL: Ref<String> = 'https://pokeapi.co/api/v2';
  const { makeRequest } = usePageRequest();

  const fetchAll = async (): Promise<void> => pokedex.value = (await makeRequest(`https://pokeapi.co/api/v2/pokemon?limit=1500&offset=0`)).results
  const fetchOne = async (pokemon: String): Promise<void> => pokedex.value = (await makeRequest(`${baseURL}/pokemon/${pokemon}}`)).results

  return {
    pokedex,
    fetchAll,
    fetchOne
  }
}
