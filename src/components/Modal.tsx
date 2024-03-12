import React, { FC } from 'react'
import Backdrop from './Backdrop';
import {motion} from 'framer-motion'

type ModalProps = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal : FC<ModalProps> = ({setOpenModal}) => {
    const dropIn = {
        hidden: {
          x: "-100vh",
          opacity: 0,
        },
        visible: {
          x: 0,
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
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
        <div className="WeeklyModal">
        <h2>Add new Weekly pin</h2>
        <button onClick={() => setOpenModal(false)}>X</button>
        </div>
      </motion.div>
    </Backdrop>
  )
}

export default Modal
