import '../src/styles/App.scss'
import Sidebar from './components/Sidebar';
import MainTasks from './components/MainTasks';
import SidebarRight from './components/SidebarRight';


function App() {

  return (
    <>
    <main>
      <div className="dashboard">
        <Sidebar />
        <MainTasks />
        <SidebarRight />
      </div>
    </main>
    </>
  )
}

export default App
