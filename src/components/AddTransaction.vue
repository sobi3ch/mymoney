<script setup lang="ts">
import type { Transaction } from '../types/types'
import { ref } from 'vue'

const emit = defineEmits<{
  add: [transaction: Transaction]
}>()

const description = ref('')
const amount = ref(0)

function addTransaction() {
  if (description.value.trim() === '' || amount.value === 0) {
    alert('Please enter a valid description and amount.')
    return
  }

  const newTransaction: Transaction = {
    id: Date.now(),
    description: description.value,
    amount: amount.value,
  }

  emit('add', newTransaction)
  // Emit the new transaction to the parent component
  // You can use an event emitter or a state management solution like Vuex or Pinia
  // For simplicity, we'll just log it here
  console.log('New Transaction:', newTransaction)

  // Clear the input fields
  description.value = ''
  amount.value = 0
}
</script>

<template>
  <div id="add-transaction">
    <h3>Add New Transaction</h3>
    <input v-model="description" type="text" placeholder="Description" />
    <input
      v-model.number="amount"
      type="number"
      placeholder="Amount (negative - expense, positive - income)"
    />
    <button @click="addTransaction">Add Transaction</button>
  </div>
</template>

<style scoped>
#add-transaction {
  background-color: #fff;
  padding: 20px;
  text-align: left;
  border: 1px solid #ccc;
  border-radius: 5px;
}
#add-transaction h3 {
  margin-bottom: 20px;
}
#add-transaction input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
#add-transaction button {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
#add-transaction button:hover {
  background-color: #218838;
}
</style>
