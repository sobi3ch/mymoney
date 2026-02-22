<template>
  <div id="income-expense">
    <div>
      <p>INCOME</p>
      <div>0,00 <span>PLN</span></div>
    </div>
    <div>
      <p>EXPENSE</p>
      <div>0,00 <span>PLN</span></div>
    </div>
  </div>
  <p>Income/Expense</p>
</template>

<script setup lang="ts"></script>

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
