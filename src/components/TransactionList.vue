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
  <div id="transaction-list">
    <p>HISTORY</p>
    <ul v-if="transactions.length > 0">
      <li v-for="transaction in transactions" :key="transaction.id">
        <span>{{ transaction.description }}</span>
        <span>{{ transaction.amount > 0 ? '+' : '' }}{{ transaction.amount }} PLN</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
#transaction-list {
  background-color: #fff;
  padding: 20px;
  text-align: left;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
#transaction-list ul {
  list-style-type: none;
  padding: 0;
}
#transaction-list li {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}
#transaction-list li:last-child {
  border-bottom: none;
}
</style>
