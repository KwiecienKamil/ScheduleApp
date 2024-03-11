import React from 'react'
import Backdrop from './Backdrop';
import {motion} from 'framer-motion'

const Modal = () => {
    const dropIn = {
        hidden: {
          y: "-100vh",
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
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
      animate="visible"
      exit="exit"
      >
        <p>Modal</p>
        <button>Close</button>
      </motion.div>
    </Backdrop>
  )
}

export default Modal
