import WeeklyRemindersTask from "./WeeklyRemindersTask";
import { IoAddOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { FC } from "react";


type WeeklyReminderProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const WeeklyReminders : FC<WeeklyReminderProps> = ({setOpenModal}) => {
  return (
    <section className="weeklyReminders">
      <div className="weeklyReminders-header">
        <h2>Weekly Pinned</h2>
        <a href="#">View all</a>
      </div>
      <WeeklyRemindersTask icon="👨‍⚕️" title="Call doctor" date="25 Apr 2024" />
      <WeeklyRemindersTask icon="💲" title="Pay taxes" date="30 Apr 2024" />
      <motion.button 
      onClick={() => setOpenModal(true)}
      whileHover={{scale: 1.01}}
      whileTap={{scale: 0.9}}
      className="weekly-reminders-task">
        <div className="weekly-reminders-task-icon">
          <span>{<IoAddOutline />}</span>
        </div>
        <div className="weekly-reminders-task-info">
          <h3>Add new weekly pin</h3>
        </div>
      </motion.button>
    </section>
  );
};

export default WeeklyReminders;
