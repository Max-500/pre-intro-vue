<template>
  <Header />
  <div class="container">
    <SideBar :msg="text"/>
    <div class="content">
      <input type="text" v-model="text">
      {{ text }}
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Header from '@/components/Header.vue';
import SideBar from '@/components/SideBar.vue';

const text = ref<string>('asd');

</script>

<style>
.container {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
