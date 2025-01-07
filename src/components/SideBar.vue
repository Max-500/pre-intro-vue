<template>
  <div class="sidebar">
    <h2>Side Bar</h2>
    <ul>
      <li><RouterLink to="/counter">Counter</RouterLink></li>
      <li><RouterLink to="/task-list">Task List</RouterLink></li>
      <li><RouterLink to="/register">Register Form</RouterLink></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
