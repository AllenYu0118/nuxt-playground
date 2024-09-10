<template>
  <h1>Index</h1>
</template>

<script setup lang="ts">
// const rentListStore = useRentListStore()

// rentListStore.fetchData()

if (import.meta.client) {
  const response = await useRecaptchFetch<Record<string, string>>('/api/hello')


}



</script>
