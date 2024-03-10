import MusicPlayer from "./MusicPlayer"
import Profile from "./Profile"
import Time from "./Time"
import Weather from "./Weather"

const SidebarRight = () => {
  return (
    <div className='sidebarRight'>
      <Profile />
      <MusicPlayer />
      <Time />
      <Weather />
    </div>
  )
}

export default SidebarRight
