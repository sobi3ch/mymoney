<script setup lang="ts">
const props = defineProps<{
  appTitle: string | undefined
}>()
</script>

<template>
  <h1>{{ props.appTitle }}</h1>
  <h2>The expense app</h2>
</template>
