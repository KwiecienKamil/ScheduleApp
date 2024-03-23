import { IoAdd } from "react-icons/io5";
import MainTask from "./MainTask";
import { FC } from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "../store/store";

type MainTasksProps = {
  setOpenTodaysTasksModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const MainTasks: FC<MainTasksProps> = ({ setOpenTodaysTasksModal }) => {
  const selector = useAppSelector((state) => state.WeeklyPin.TodaysTasks);

  console.log(selector);
  
  return (
    <section className="mainTasks">
      <div className="mainTasks-header">
        <div>
          <h5>Today's Schedule</h5>
          <p>You got this!</p>
        </div>
        <motion.button
          className="mainTasks-icon"
          onClick={() => setOpenTodaysTasksModal(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoAdd />
        </motion.button>
      </div>
      <div className="mainTasks-tasks">
        {selector.map((task) => (
          <MainTask title={task.title} hour={task.hour} icon={task.icon} description={task.description} />
        ))}
      </div>
    </section>
  );
};

export default MainTasks;
