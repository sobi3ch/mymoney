<template>
  <div id="add-transaction">
    <h3>Add New Transaction</h3>
    <input type="text" placeholder="Description" />
    <input type="number" placeholder="Amount (negative - expense, positive - income)" />
    <button>Add Transaction</button>
  </div>
</template>

<script setup lang="ts"></script>

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
