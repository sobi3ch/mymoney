<template>
  <div id="transaction-list">
    <p>History</p>
    <ul>
      <li>
        <span>Salary</span>
        <span>+5000 PLN</span>
      </li>
      <li>
        <span>Groceries</span>
        <span>-200 PLN</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

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
