<template>
  <div id="balance">
    <p class="py-2 rounded-sm font-bold uppercase">Twoje saldo</p>
    <div>{{ balance }} <span>PLN</span></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  balance: number
}>()
</script>

<style scoped>
#balance {
  background-color: #fff;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
