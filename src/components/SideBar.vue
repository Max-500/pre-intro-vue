<template>
  <div class="sidebar">
    <h2>Welcome!!!</h2>
    <h3>Name: {{ computed(() => registerStore.name) }}</h3>
    <h2>Email:  {{ computed(() => registerStore.email) }}</h2>
    <h2>Variable Reactiva: {{ props.msg }}</h2>
    <h2>Side Bar</h2>
    <ul>
      <li><RouterLink to="/counter">Counter</RouterLink></li>
      <li><RouterLink to="/task-list">Task List</RouterLink></li>
      <li><RouterLink to="/register">Register Form</RouterLink></li>
      <li><RouterLink to="/calculate">Calculate</RouterLink></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRegisterStore } from '@/modules/register/stores/registerStore';
import { computed, defineProps } from 'vue';

const registerStore = useRegisterStore();

const props = defineProps({
  msg: String
})
</script>

<style>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
