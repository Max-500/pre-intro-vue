import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', () => {
  const weather = ref<number>(0);

  const setWeather = (weatherData: number) => {
    weather.value = weatherData;
  }

  return { weather, setWeather };
});
