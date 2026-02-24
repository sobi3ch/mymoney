<script setup lang="ts">
import type { Transaction } from '../types/types'

defineProps({
  transactions: {
    type: Array as () => Transaction[],
    required: true,
  },
})
</script>

<template>
  <div id="transaction-list" class="rounded bg-white p-4 mb-6 border-1 border-gray-300">
    <p class="py-2 rounded-sm font-bold uppercase">historia</p>
    <ul v-if="transactions.length > 0" class="">
      <li
        v-for="transaction in transactions"
        :key="transaction.id"
        :class="[
          'border-r-8 p-2 my-2 flex justify-between last:pb-0',
          transaction.amount > 0 ? 'border-green-500' : 'border-red-500',
        ]"
      >
        <span>{{ transaction.description }}</span>
        <span class="px-3"
          >{{ transaction.amount > 0 ? '+' : '' }}{{ transaction.amount }} PLN</span
        >
      </li>
    </ul>
  </div>
</template>
