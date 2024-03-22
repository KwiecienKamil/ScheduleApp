import { LuWind } from "react-icons/lu";
import { useEffect, useState } from "react";



const Weather = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Warsaw&&units=metric&appid=${import.meta.env.VITE_API_KEY}`
  



  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const resData = await res.json();
        setData(resData);
      } catch (err: any) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, []);


  if (isLoading) {
    return <div className="weather">Loading...</div>;
  }

  return (
    <div className="weather">
      <h3>{data.name}</h3>
      {data.name ? <p>{`${data.main.temp} °C`}</p> : ""}
      {data.name ? <p>{`${data.main.pressure} hPa`}</p> : ""}
      {data.name ? (
        <div className="wind">
          <p>{`${data.wind.speed} km/h`}</p>
          <LuWind />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Weather;
