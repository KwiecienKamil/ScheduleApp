import React, { FC } from 'react'
import Backdrop from './Backdrop';
import {motion} from 'framer-motion'
import { IoCloseSharp } from "react-icons/io5";

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
        <motion.button
         whileHover={{scale: 1.05}}
         whileTap={{scale: 0.9}}
        onClick={() => setOpenModal(false)}>
        <IoCloseSharp />
        </motion.button>
        </div>
        <form className='weekly-form'>
          <div className="weekly-form-data">
          <label>Title</label>
          <input type="text" placeholder='E.g. Call mom'/>
          </div>
          <div className="weekly-form-data">
          <label>Date</label>
          <input type="date"/>
          </div>
          <div className="weekly-form-data">
          <label>Emoji</label>
          <input type="text" placeholder='Paste single emoji'/>
          </div>
          <a href="https://getemoji.com/" target='blank'>Get emoji</a>
        </form>
        
      </motion.div>
    </Backdrop>
  )
}

export default Modal
