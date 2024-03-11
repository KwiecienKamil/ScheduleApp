import '../src/styles/App.scss'
import Sidebar from './components/Sidebar';
import MainTasks from './components/MainTasks';
import SidebarRight from './components/SidebarRight';
import { useState } from 'react';
import Backdrop from './components/Backdrop';
import Modal from './components/Modal';


function App() {
  const [openModal, setOpenModal] = useState(false);

  
  return (
    <>
    <main>
      <div className="dashboard">
        <Sidebar setOpenModal={setOpenModal}/>
        <MainTasks />
        <SidebarRight />
        {openModal && <Modal />}
      </div>
    </main>
    </>
  )
}

export default App
