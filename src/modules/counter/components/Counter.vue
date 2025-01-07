<template>
    <b>This is my counter {{ counter }}</b>
    <br>
    <button @click="increase(1, true)">Push Me To Increase</button>
    <br>
    <button @click="increase(1, false)">Push Me To Decrease</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const counter = ref<number>(0)
const increase: (increaseBy: number, isIncrease: boolean) => void = (increaseBy: number, isIncrease: boolean): void => {
  if(isIncrease) {
    counter.value += increaseBy;
    return;
  }
  if(counter.value <= 0) return;
  counter.value -= increaseBy;
}
</script>

<style scoped>
</style>
