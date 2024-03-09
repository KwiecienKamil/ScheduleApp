import Calendar from "./Calendar"
import Logo from "./Logo"
import WeeklyReminders from "./WeeklyReminders"

const Sidebar = () => {
  return (
    <div className="dashboard-sidebar">
    <Logo />
    <WeeklyReminders />
    <Calendar />
    </div>
  )
}

export default Sidebar
