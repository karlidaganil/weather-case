import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = "apikey 3tCkBW714H7io7rxI5Pqq7:3uqWiCFDcigQOOKd0CP3Cf";

const apiConfig = {
  headers: {
    "content-type": "application/json",
    authorization: API_KEY,
  },
};

const apiUrl = "https://api.collectapi.com/weather/getWeather?data.lang=tr";

const useGetWeather = (city) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (!city) return;
    axios.get(`${apiUrl}&data.city=${city}`, apiConfig).then((data) => {
      setWeather(data.data.result[0]);
    });
  }, [city]);

  return { weather };
};

export default useGetWeather;
