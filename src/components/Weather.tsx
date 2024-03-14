import axios from "axios";
import { FC, useEffect, useState } from "react";

type WeatherProps = {
  name: string | undefined;
  temp: number | undefined;
  pressure: number | undefined;
};

const Weather = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Warsaw&&units=metric&appid=01b3faed431e892073487aa390b3e1a4";

  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);
      const res = await fetch(url);
      const resData = (await res.json()) as WeatherProps[];
      setData(resData);
      setIsLoading(false);
    };

    fetchWeather();
  }, []);

  console.log(data);
  if(isLoading) {
    return <div className="weather">Loading...</div>
  }

  return (
    <div className="weather">
      <h3>{data.name}</h3>
      <p>{`${data.main.temp} °C`}</p>
      <p>{`${data.main.pressure} hPa`}</p>
    </div>
  )
};

export default Weather;
