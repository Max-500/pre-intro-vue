<template>
  <div class="result">
    Congratulations, you are {{ props.result }} years old and you are already of legal age
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  result: Number
});
</script>

<style scoped>
.result {
  background-color: aquamarine;
}
</style>
