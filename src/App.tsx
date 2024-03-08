import React, { useState } from 'react'
import {getMonth} from './utils/currentMonth'
import Day from './components/Day';
import '../src/styles/App.scss'
import Sidebar from './components/Sidebar';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  return (
    <>
    <main>
      <div className="dashboard">
        <Sidebar />
      </div>
    </main>
    {/* {currentMonth.map((row, i) => (
        <React.Fragment key={i}>
          <div className="calendar" key={i}>
          {row.map((day, idx) => (
             <Day day={day} rowIdx={i} key={idx}/>
            ))}
            </div>
        </React.Fragment>
    ))} */}
    </>
  )
}

export default App
