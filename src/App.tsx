import React, { useState } from 'react'
import {getMonth} from './utils/currentMonth'
import Day from './components/Day';
import '../src/styles/App.scss'
import Sidebar from './components/Sidebar';
import Calendar from './components/Calendar';

function App() {

  return (
    <>
    <main>
      <div className="dashboard">
        <Sidebar />
        
      </div>
    </main>
    </>
  )
}

export default App
