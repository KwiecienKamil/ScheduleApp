import React, { useState } from 'react'
import { getMonth } from '../utils/currentMonth';
import Day from './Day';
import dayjs from 'dayjs';

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    const CurrentDate = dayjs().format("DD-MM-YY");
    
  return (
    <div className='calendar'>
    <h4 className='calendar-date'>Today is<span>{CurrentDate}</span></h4>
    <div>
      {currentMonth.map((row, i) => (
        <React.Fragment key={i}>
          <div className="row" key={i}>
          {row.map((day, idx) => (
             <Day day={day} rowIdx={i} key={idx}/>
            ))}
            </div>
        </React.Fragment>
    ))}
    </div>
    </div>
  )
}

export default Calendar
