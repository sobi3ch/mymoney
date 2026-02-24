<script setup lang="ts">
const props = defineProps<{
  appTitle: string | undefined
  appSubtitle: string | undefined
}>()
</script>

<template>
  <h1>{{ props.appTitle }}</h1>
  <h2>{{ props.appSubtitle }}</h2>
</template>
