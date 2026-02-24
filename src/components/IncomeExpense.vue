<script setup lang="ts">
defineProps<{
  income: string
  expense: string
}>()
</script>

<template>
  <div id="income-expense">
    <div>
      <p>INCOME</p>
      <div>{{ income }} <span>PLN</span></div>
    </div>
    <div>
      <p>EXPENSE</p>
      <div>{{ expense }} <span>PLN</span></div>
    </div>
  </div>
</template>

<style scoped>
#income-expense {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
#income-expense div {
  width: 45%;
}
</style>
