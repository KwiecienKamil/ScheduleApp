import '../src/styles/App.scss'
import Sidebar from './components/Sidebar';
import MainTasks from './components/MainTasks';
import SidebarRight from './components/SidebarRight';
import { useState } from 'react';
import Modal from './components/WeeklyModal';
import { AnimatePresence } from 'framer-motion';
import LoginRegisterModal from './components/LoginRegisterModal';


function App() {
  const [openWeeklyModal, setOpenWeeklyModal] = useState(false);
  const [openLoginRegisterModal, setOpenLoginRegisterModal] = useState(false);

  return (
    <>
    <main>
      <div className="dashboard">
        <Sidebar setOpenModal={setOpenWeeklyModal}/>
        <MainTasks />
        <SidebarRight setOpenModal={setOpenLoginRegisterModal}/>
        <AnimatePresence>
        {openWeeklyModal && <Modal setOpenModal={setOpenWeeklyModal}/>}
        {openLoginRegisterModal && <LoginRegisterModal setOpenModal={setOpenLoginRegisterModal}/>}
        </AnimatePresence>
      </div>
    </main>
    </>
  )
}

export default App
