<template>
  <div>
    <h2>Task List</h2>
    <input type="text" v-model="newTask" @keyup.enter="addTask">
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }}
        <button @click="deleteTask(index)">Borrar</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tasks = ref<string[]>([]);

const newTask = ref<string>('');

const addTask: () => void = () => {
  tasks.value.push(newTask.value);
  newTask.value = '';
}


const deleteTask: (index: number) => void = (index: number) => {
  tasks.value.splice(index, 1);
}
</script>

<style>
</style>
