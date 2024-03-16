import React, { FC } from 'react'
import { SidebarProps } from './Sidebar'
import Backdrop from './Backdrop'
import {motion} from 'framer-motion'


const LoginRegisterModal : FC<SidebarProps> = ({setOpenModal}) => {

    const appear = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 1,
            type: "spring",
            damping: 35,
            stiffness: 500,
          },
        },
        exit: {
          y: "100vh",
          opacity: 0,
        },
      };
  return (
    <Backdrop>
    <motion.div
    onClick={(e) => e.stopPropagation()}
    className="modal"
    variants={appear}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
        <button onClick={() => setOpenModal(false)}>Close</button>
    </motion.div>
  </Backdrop>
  )
}

export default LoginRegisterModal
