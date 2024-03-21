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
            <MainTask icon="⏰" title="Wake up buddy" hour="7:00" description=""/>
            <MainTask icon="🙆" title="Morning Yoga" hour="8:00" description=""/>
            <MainTask icon="🦾" title="Daily Workout" hour="9:00" description="Squat 10x3, Push up 10x3"/>
            <MainTask icon="👨‍💻" title="Coding Session" hour="11:00" description=""/>
            <MainTask icon="🚿" title="Cold Shower" hour="15:00" description=""/>
        </div>
    </section>
  )
}

export default MainTasks
