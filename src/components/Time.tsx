import { useState } from "react";

const Time = () => {
    const [currentTime, setCurrentTIme] = useState("");

    setInterval(() => {
        let currentDate = new Date();
        let time = currentDate.toLocaleTimeString();
        setCurrentTIme(time);

    }, 1000)
    
  return (
    <div className="time">
      <p className="time-current-time">{currentTime}</p>
    </div>
  )
}

export default Time
