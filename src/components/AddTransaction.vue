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
  <div id="add-transaction" class="bg-white border-1 rounded-sm border-gray-300 p-5 mb-6">
    <h3 class="py-2 mb-5 rounded-sm font-bold uppercase">Dodaj nową transakcję</h3>
    <input
      v-model="description"
      type="text"
      placeholder="Opis"
      class="border border-gray-300 rounded-sm p-3 w-full mb-5"
    />
    <input
      v-model.number="amount"
      type="number"
      placeholder="Amount (negative - expense, positive - income)"
      class="border border-gray-300 rounded-sm p-3 w-full mb-5"
    />
    <button
      @click="addTransaction"
      class="text-white bg-green-600 hover:bg-green-500 w-full p-3 border-none rounded-sm font-bold uppercase cursor-pointer"
    >
      Dodaj transakcję
    </button>
  </div>
</template>
