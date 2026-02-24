<script setup lang="ts">
defineProps<{
  income: string
  expense: string
}>()
</script>

<template>
  <div id="income-expense" class="mb-6 grid grid-cols-2 gap-4 mb-6 text-center">
    <div class="bg-green-500 text-gray-700 p-2 rounded-sm font-bold uppercase">
      <p>dochód</p>
      <div>{{ income }} <span>PLN</span></div>
    </div>
    <div class="bg-red-500 text-gray-200 p-2 rounded-sm font-bold uppercase">
      <p>wydatki</p>
      <div class="flex items-baseline gap-1 justify-center">
        <span>{{ expense }}</span> <span class="inline">PLN</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
