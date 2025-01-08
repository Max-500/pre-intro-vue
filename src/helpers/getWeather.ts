import axios from "axios";

const apiURL: string = "https://api.open-meteo.com/v1/forecast?latitude=23&longitude=-102&current=temperature_2m&timezone=auto&forecast_days=1";

export const getWeather = async () => {
  const response = await axios.get(apiURL);

  return response.data.current.temperature_2m;
}
