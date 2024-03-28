import React, { useState } from 'react'
import { useAppDispatch } from '../store/store'
import { WeeklyPin, removeWeeklyPin } from '../store/features/WeeklyPinsSlice'
import { motion } from "framer-motion";
import { IoIosRemove } from "react-icons/io";
import { MdDone } from "react-icons/md";

type WeeklyRemindersTaskProps = {
  icon: string,
  title: string,
  date: string,
  id: number,
  weeklyTask: WeeklyPin
}
const WeeklyRemindersTask = ({icon,title, date, id, weeklyTask}:WeeklyRemindersTaskProps) => {
  const [doneTask, setDoneTask] = useState(false)
  const dispatch = useAppDispatch()
  return (
    <div className={doneTask ? 'weekly-reminders-task' : 'weekly-reminders-task-done'} key={id}>
      <div className='flexWithGap'>
      <div className='weekly-reminders-task-icon'>
        <span>{icon}</span>
        </div>
        <div className="weekly-reminders-task-info">
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
      </div>
       <div className='flexWithGap'>
       <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setDoneTask(!doneTask)}
          className="weekly-reminders-done-btn"
        >
          <MdDone/>
        </motion.button>
       <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => dispatch(removeWeeklyPin(weeklyTask))}
          className="weekly-reminders-remove-btn"
        >
          <IoIosRemove className="weekly-reminders-remove-btn-icon"/>
        </motion.button>
       </div>
       
      
    </div>
  )
}

export default WeeklyRemindersTask
