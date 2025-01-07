<template>
  <div class="sidebar">
    <h2>Welcome!!!</h2>
    <h3>Name: {{ name }}</h3>
    <h2>Email:  {{ email }}</h2>

    <h2>Side Bar</h2>
    <ul>
      <li><RouterLink to="/counter">Counter</RouterLink></li>
      <li><RouterLink to="/task-list">Task List</RouterLink></li>
      <li><RouterLink to="/register">Register Form</RouterLink></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRegisterStore } from '@/modules/register/stores/registerStore';
import { computed } from 'vue';

const registerStore = useRegisterStore();

const name = computed(() => registerStore.name); // Reactividad automática
const email = computed(() => registerStore.email);
</script>

<style>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
