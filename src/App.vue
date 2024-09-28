<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import type Pokemon from 'types/Pokemon'
import usePokedex from './composables/usePokedex'

import InputSearch from './components/InputSearch.vue'
import PokedexTable from './components/PokedexTable.vue'

const { pokedex, fetchAll: fetchAllPokemons } = usePokedex()
fetchAllPokemons()

const input: Ref<null | String> = ref(null)
const onKeyPress = (event: KeyboardEvent): void => {
  if (event.key === '/') {
    event.preventDefault()

    input.value.input.focus()
  }
}

const searchInput: Ref<String> = ref('')

onMounted((): void => document.body.addEventListener('keypress', onKeyPress))
onUnmounted((): void => document.body.addEventListener('keypress', onKeyPress))

const pokemons:ComputedRef<Array<String>> = computed((): Array<String> => {
  if (searchInput.value === '') {
    return pokedex.value
  }

  return pokedex.value.filter((pokemon: Pokemon): Pokemon => pokemon?.name?.includes(searchInput.value))
})
</script>

<template>
  <InputSearch ref="input" v-model:search-input="searchInput" />
  <PokedexTable :pokemons="pokemons" />
</template>
