<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppBalance from './components/AppBalance.vue'
import IncomeExpense from './components/IncomeExpense.vue'
import TransactionList from './components/TransactionList.vue'
import AddTransaction from './components/AddTransaction.vue'
import type { Transaction } from './types/types'

import { ref, computed, inject } from 'vue'

const appTitle = inject<string>('appTitle')
const appSubtitle = inject<string>('appSubtitle')

const transactions = ref<Transaction[]>([
  { id: 1, description: 'Intellias', amount: 25000 },
  { id: 2, description: 'rata Millenium', amount: -2000 },
  { id: 3, description: 'Tauron', amount: -300 },
  { id: 4, description: 'Plus', amount: -400 },
  { id: 5, description: 'Biedronka', amount: -500 },
  { id: 6, description: 'Google', amount: -9.99 },
])

const totalBalance = computed(() => {
  return transactions.value.reduce((sum, transaction) => sum + transaction.amount, 0)
})

const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((sum, transaction) => sum + transaction.amount, 0)
    .toFixed(2)
})

const expense = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((sum, transaction) => sum + transaction.amount, 0)
    .toFixed(2)
})
</script>

<template>
  <AppHeader :appTitle="appTitle" :appSubtitle="appSubtitle" />
  <AppBalance :balance="totalBalance" />
  <IncomeExpense :income="income" :expense="expense" />
  <TransactionList :transactions="transactions" />
  <AddTransaction @add="transactions.push($event)" />
</template>
