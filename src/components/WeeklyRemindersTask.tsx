import React from 'react'
import { useAppDispatch } from '../store/store'
import { WeeklyPin, removeWeeklyPin } from '../store/features/WeeklyPinsSlice'

type WeeklyRemindersTaskProps = {
  icon: string,
  title: string,
  date: string,
  id: number,
  weeklyTask: WeeklyPin
}
const WeeklyRemindersTask = ({icon,title, date, id, weeklyTask}:WeeklyRemindersTaskProps) => {
  const dispatch = useAppDispatch()
  return (
    <div className='weekly-reminders-task' key={id}>
        <div className='weekly-reminders-task-icon'>
        <span>{icon}</span>
        </div>
        <div className="weekly-reminders-task-info">
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
        <button onClick={() => dispatch(removeWeeklyPin(weeklyTask))}>Remove</button>
      
    </div>
  )
}

export default WeeklyRemindersTask
