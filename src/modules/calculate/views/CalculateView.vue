<template>
  <h3>Computed Properties</h3>
  <br>
  <label>Ingresa tu edad</label>
  <br>
  <input type="text" v-model="value" />
  <br />
  {{ valueCalculated }}
  <ResultSection v-show="isMajor" :result="valueNumber" />
  <ResultSection v-if="isMajor" :result="valueNumber" />
  <div v-else-if="isNaN(valueNumber)" class="result">
    Enter your age in numbers
  </div>
  <div v-else class="result">
    Sorry, you are {{ valueNumber }} years old and you are not already of legal age
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ResultSection from '../components/ResultSection.vue';

const value = ref<string>('');

const valueNumber = computed(() => {
  const parsed = Number(value.value);
  return isNaN(parsed) ? NaN : parsed;
});

const valueCalculated = computed(() => {
  return !isNaN(valueNumber.value) ? valueNumber.value ** 2 : 0;
});

const isMajor = computed(() => {
  return valueNumber.value >= 18 && valueNumber.value <= 120;
});
</script>

<style scoped>
.result {
  background-color: aquamarine;
}
</style>
