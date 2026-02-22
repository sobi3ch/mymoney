<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppBalance from './components/AppBalance.vue'
import IncomeExpense from './components/IncomeExpense.vue'
import TransactionList from './components/TransactionList.vue'
import AddTransaction from './components/AddTransaction.vue'
</script>
<template>
  <AppHeader />
  <AppBalance />
  <IncomeExpense />
  <TransactionList />
  <AddTransaction />
</template>

<style scoped></style>
