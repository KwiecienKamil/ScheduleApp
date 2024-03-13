import axios from "axios";
import { useEffect, useState } from "react";

const Weather = () => {
  const [data, setData] = useState([])
  const apiKey = "01b3faed431e892073487aa390b3e1a4";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Warsaw&&units=metric&appid=01b3faed431e892073487aa390b3e1a4"

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    }).catch(err => {
      console.log(err);
      
    })
  },[setData])

  console.log(data);
  
  return (
    <div className="weather">
      
    </div>
  )
}

export default Weather
