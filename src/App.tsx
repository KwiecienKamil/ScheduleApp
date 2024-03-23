import '../src/styles/App.scss'
import Sidebar from './components/Sidebar';
import MainTasks from './components/MainTasks';
import SidebarRight from './components/SidebarRight';
import { useState } from 'react';
import Modal from './components/WeeklyModal';
import { AnimatePresence } from 'framer-motion';
import LoginRegisterModal from './components/LoginRegisterModal';
import TodaysTasksModal from './components/TodaysTasksModal';
// import axios from 'axios';


function App() {
  const [openWeeklyModal, setOpenWeeklyModal] = useState(false);
  const [openLoginRegisterModal, setOpenLoginRegisterModal] = useState(false);
  const [openTodaysTasksModal, setOpenTodaysTasksModal] = useState(false);

 
  

  // axios.get("http://localhost/api/index.php").then(response => {
  //   console.log(response.data);
  // })

  return (
    <>
    <main>
      <div className="dashboard">
        <Sidebar setOpenModal={setOpenWeeklyModal}/>
        <MainTasks setOpenTodaysTasksModal={setOpenTodaysTasksModal}/>
        <SidebarRight setOpenModal={setOpenLoginRegisterModal}/>
        <AnimatePresence>
        {openWeeklyModal && <Modal setOpenModal={setOpenWeeklyModal}/>}
        {openLoginRegisterModal && <LoginRegisterModal setOpenModal={setOpenLoginRegisterModal}/>}
        {openTodaysTasksModal && <TodaysTasksModal setOpenModal={setOpenTodaysTasksModal}/>}
        </AnimatePresence>
      </div>
    </main>
    </>
  )
}

export default App
