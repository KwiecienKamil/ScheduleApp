import { FC } from "react"
import MusicPlayer from "./MusicPlayer"
import Profile from "./Profile"
import Time from "./Time"
import Weather from "./Weather"
import { SidebarProps } from "./Sidebar"

const SidebarRight: FC<SidebarProps> = ({setOpenModal}) => {
  return (
    <div className='sidebarRight'>
      <Profile setOpenModal={setOpenModal}/>
      <MusicPlayer />
      <Time />
      <Weather />
    </div>
  )
}

export default SidebarRight
