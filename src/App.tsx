import '../src/styles/App.scss'
import Sidebar from './components/Sidebar';
import MainTasks from './components/MainTasks';
import SidebarRight from './components/SidebarRight';
import { useState } from 'react';
import Modal from './components/Modal';
import { AnimatePresence } from 'framer-motion';


function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
    <main>
      <div className="dashboard">
        <Sidebar setOpenModal={setOpenModal}/>
        <MainTasks />
        <SidebarRight />
        <AnimatePresence>
        {openModal && <Modal setOpenModal={setOpenModal}/>}
        </AnimatePresence>
      </div>
    </main>
    </>
  )
}

export default App
