<script setup lang="ts">
const props = defineProps<{
  appTitle: string | undefined
  appSubtitle: string | undefined
}>()
</script>

<template>
  <h1 class="my-4 font-bold text-4xl">{{ props.appTitle }}</h1>
  <h2 class="my-2 italic text-xl">{{ props.appSubtitle }}</h2>
</template>
