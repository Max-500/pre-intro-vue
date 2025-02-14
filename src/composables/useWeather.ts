import { useWeatherStore } from "@/stores/weatherStore";
import { getWeather } from "@/helpers/getWeather";

export const useWeather = async () => {
  const weather = await getWeather();
  const weatherStore = useWeatherStore();
  weatherStore.setWeather(weather);
}
