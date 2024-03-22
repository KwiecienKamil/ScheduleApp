import React from 'react'

type WeeklyRemindersTaskProps = {
  icon: string,
  title: string,
  date: string,
  id: number
}
const WeeklyRemindersTask = ({icon,title, date, id}:WeeklyRemindersTaskProps) => {
  return (
    <div className='weekly-reminders-task' key={id}>
        <div className='weekly-reminders-task-icon'>
        <span>{icon}</span>
        </div>
        <div className="weekly-reminders-task-info">
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
      
    </div>
  )
}

export default WeeklyRemindersTask
