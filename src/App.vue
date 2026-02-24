<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppBalance from './components/AppBalance.vue'
import IncomeExpense from './components/IncomeExpense.vue'
import TransactionList from './components/TransactionList.vue'
import AddTransaction from './components/AddTransaction.vue'
import type { Transaction } from './types/types'

import { ref, computed, inject } from 'vue'

const appTitle = inject<string>('appTitle')

const transactions = ref<Transaction[]>([
  { id: 1, description: 'Mąka', amount: 5000 },
  { id: 2, description: 'xxx', amount: -200 },
  { id: 3, description: 'yyy', amount: -300 },
  { id: 4, description: 'zzz', amount: -400 },
])

const totalBalance = computed(() => {
  return transactions.value.reduce((sum, transaction) => sum + transaction.amount, 0)
})
</script>

<template>
  <AppHeader :appTitle="appTitle" />
  <AppBalance :balance="totalBalance" />
  <IncomeExpense />
  <TransactionList :transactions="transactions" />
  <AddTransaction @add="transactions.push($event)" />
</template>
