import { FC } from "react";
import Calendar from "./Calendar"
import Logo from "./Logo"
import WeeklyReminders from "./WeeklyReminders"

export type SidebarProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar : FC <SidebarProps> = ({setOpenModal}) => {
  return (
    <div className="dashboard-sidebar">
    <Logo />
    <WeeklyReminders setOpenModal={setOpenModal}/>
    <Calendar />
    </div>
  )
}

export default Sidebar
