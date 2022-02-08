<script setup>
import Button from "./Button.vue";
</script>

<template>
  <header class="header">
    <div class="title">Header</div>
    <Button label="click" class="btn" />
  </header>
</template>

<style scoped>
.header {
  display: flex;
}

.title {
  flex: 1;
}

.btn {
  margin-left: auto;
  width: 3.5rem;
}
</style>
