import WeeklyRemindersTask from "./WeeklyRemindersTask";
import { IoAddOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";


type WeeklyReminderProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const WeeklyReminders : FC<WeeklyReminderProps> = ({setOpenModal}) => {

  const selector = useAppSelector((state) => state.WeeklyPin.WeeklyPins);


  return (
    <section className="weeklyReminders">
      <div className="weeklyReminders-header">
        <h2>Weekly Pinned</h2>
        <a href="#">View all</a>
      </div>
      <div className="weeekly-reminders-tasks">
      {selector.map((weeklyTask) => (
        <WeeklyRemindersTask weeklyTask={weeklyTask} id={weeklyTask.id} icon={weeklyTask.emoji} date={weeklyTask.date} title={weeklyTask.description}/>
      ))}
      </div>
      <motion.button 
      onClick={() => setOpenModal(true)}
      whileHover={{scale: 1.01}}
      whileTap={{scale: 0.9}}
      className="weekly-reminders-task" id="addNewWeekly">
       <div className="flexWithGap">
       <div className="weekly-reminders-task-icon">
          <span>{<IoAddOutline />}</span>
        </div>
        <div className="weekly-reminders-task-info">
          <h3>Add new weekly pin</h3>
        </div>
       </div>
      </motion.button>
    </section>
  );
};

export default WeeklyReminders;
