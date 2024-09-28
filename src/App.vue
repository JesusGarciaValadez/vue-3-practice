<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import type Pokemon from 'types/Pokemon'
import usePokedex from './composables/usePokedex'

import InputSearch from './components/InputSearch.vue'
import PokedexTable from './components/PokedexTable.vue'

const { pokedex, fetchAll: fetchAllPokemons } = usePokedex()
fetchAllPokemons()

const input: Ref<null> = ref(null)
const searchTerm: Ref<String> = ref('')
const onKeyPress = (event: KeyboardEvent): void => {
  if (event.key === '/') {
    event.preventDefault()

    input.value.input.focus()
  }
}
onMounted((): void => document.body.addEventListener('keypress', onKeyPress))
onUnmounted((): void => document.body.addEventListener('keypress', onKeyPress))

const pokemons: ComputedRef = computed(() => {
  if (searchTerm.value === '') {
    return pokedex.value
  }

  return pokedex.value.filter((pokemon: Pokemon) => pokemon.name.includes(searchTerm.value))
})
</script>

<template>
  <InputSearch ref="input" v-model:search-term="searchTerm" />
  <PokedexTable :pokemons="pokemons" />
</template>
