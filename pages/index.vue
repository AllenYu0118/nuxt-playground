<template>
  <h1>Index</h1>
</template>
<script setup lang="ts">
const rentListStore = useRentListStore()

rentListStore.fetchData()

</script>
