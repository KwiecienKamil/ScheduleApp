import WeeklyRemindersTask from "./WeeklyRemindersTask"
import { IoAddOutline } from "react-icons/io5";

const WeeklyReminders = () => {
  return (
    <section className='weeklyReminders'>
        <div className="weeklyReminders-header">
            <h2>Weekly Pinned</h2>
            <a href="#">View all</a>
        </div>
        <WeeklyRemindersTask icon="👨‍⚕️" title="Call doctor" date="15 Mar 2024"/>
        <WeeklyRemindersTask icon="👨‍⚕️" title="Call doctor" date="15 Mar 2024"/>
        <div className='weekly-reminders-task'>
        <div className='weekly-reminders-task-icon'>
        <span>{<IoAddOutline />}</span>
        </div>
        <div className="weekly-reminders-task-info">
          <h3>Add new weekly pin</h3>
        </div>
      
    </div>
    </section>
  )
}

export default WeeklyReminders
