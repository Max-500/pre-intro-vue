<template>
  <h3>The temperature is: {{ useWeatherStore().weather }} °C </h3>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useWeather } from '@/composables/useWeather';
import { useWeatherStore } from '@/stores/weatherStore';

onBeforeMount(() => {
  useWeather();
});
</script>

<style scoped>
</style>
