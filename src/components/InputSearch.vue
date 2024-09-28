<script setup lang="ts">
import { type EmitFn, type ExtractPropTypes, ref, watch } from 'vue'
import type { Ref  } from 'vue'

const input: Ref<null | String> = ref(null)
defineExpose({ input })

const props: Readonly<ExtractPropTypes<{searchTerm: {default: string, type: StringConstructor, required:
  boolean}}>> = defineProps({
  searchTerm: {
    type: String,
    required: true,
    default: ''
  }
})
const _searchTerm: Ref<String> = ref(props.searchTerm)

const emit: EmitFn<'update:search-term'[]> = defineEmits(['update:search-term'])

watch(
  _searchTerm,
  (): void => emit('update:search-term', _searchTerm.value)
)
</script>

<template>
  <div class="min-w-full">
    <label for="searchTerm" class="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300">Pokémon</label>
    <div class="mt-2">
      <input v-model="_searchTerm"
             type="text"
             name="searchTerm"
             id="searchTerm"
             ref="input"
             class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             placeholder="Pokemon name"
      >
    </div>
  </div>
</template>
