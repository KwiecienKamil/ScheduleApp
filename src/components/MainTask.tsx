import {
  TodaysTask,
  removeTodaysTask,
} from "../store/features/WeeklyPinsSlice";
import { useAppDispatch } from "../store/store";
import { motion } from "framer-motion";
import { IoIosRemoveCircle } from "react-icons/io";

type MainTaskProps = {
  icon: string;
  title: string;
  hour: string;
  description: string;
  task: TodaysTask;
};
const MainTask = ({ icon, title, hour, description, task }: MainTaskProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="mainTasks-wrapper">
      <div className="mainTask">
        <span className="mainTask-icon">{icon}</span>
        <div className="mainTasks-center">
          <h6>{title}</h6>
          <p>{description}</p>
        </div>
        <p>{hour}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => dispatch(removeTodaysTask(task))}
          className="mainTasks-remove-btn"
        >
          <IoIosRemoveCircle className="mainTasks-remove-btn-icon"/>
        </motion.button>
      </div>
    </div>
  );
};

export default MainTask;
