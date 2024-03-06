import React, { useState } from 'react'
import {getMonth} from './utils/currentMonth'

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())

  console.log(currentMonth);
  
  
  return (
    <>
    {currentMonth.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <div key={idx}>
              {day.format()}
            </div>
            ))}
        </React.Fragment>

    ))}
    </>
  )
}

export default App
