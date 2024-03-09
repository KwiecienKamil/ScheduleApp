import { IoAdd } from "react-icons/io5";
import MainTask from "./MainTask";
const MainTasks = () => {
  return (
    <section className="mainTasks">
        <div className="mainTasks-header">
            <div>
                <h5>Today's Schedule</h5>
                <p>You got this!</p>
            </div>
            <span className="mainTasks-icon">
            <IoAdd />
            </span>
        </div>
        <div className="mainTasks-tasks">
            <MainTask icon="⏰" title="Wake up buddy" hour="7:00"/>
        </div>
    </section>
  )
}

export default MainTasks
