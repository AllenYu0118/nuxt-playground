<template>
  <h1>Index</h1>

  <NuxtLink to="/swiper">Swiper</NuxtLink>
</template>

<script setup lang="ts">
if (import.meta.client) {
  const response = await useRecaptchFetch<Record<string, string>>('/api/hello')
}
</script>
