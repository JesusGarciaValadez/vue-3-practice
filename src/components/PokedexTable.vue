<script setup lang="ts">
defineProps({
  pokemons: {
    type: Array<String>,
    required: true,
    default: () => ([])
  }
})
</script>

<template>
  <table class="min-w-full divide-y divide-gray-300">
    <thead>
      <tr>
        <th scope="col"
            class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-300 sm:pl-3">Number
        </th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-300">Name</th>
      </tr>
    </thead>
    <tbody class="bg-white">
      <tr class="even:bg-gray-50" v-for="({ name }, index) in pokemons" :key="`${name}-${index}`">
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
          {{ index + 1 }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ name }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
