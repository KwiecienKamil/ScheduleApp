import React, { FC, useState } from 'react'
import Backdrop from './Backdrop';
import {motion} from 'framer-motion'
import { IoCloseSharp } from "react-icons/io5";
import { addTodaysTask, addWeeklyPin } from '../store/features/WeeklyPinsSlice';
import { useAppDispatch} from '../store/store';

type ModalProps = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodaysTasksModal : FC<ModalProps> = ({setOpenModal}) => {
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [hour, setHour] = useState("");
  

  const dispatch = useAppDispatch()

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

      const handleDispatch = (e:React.SyntheticEvent) => {
        e.preventDefault()
        if(title.length > 0) {
        dispatch(
          addTodaysTask({
            id: Math.floor(Math.random() * 9999),
            description: desc,
            hour: hour,
            title: title,
            icon: icon
          })
        );
        }else {
          
        }
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
        <h2>Add Today's Tasks</h2>
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
          <input type="text" placeholder='E.g. Call mom' onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className="weekly-form-data">
          <label>Date</label>
          <input type="time" onChange={(e) => setHour(e.target.value)}/>
          </div>
          <div className="weekly-form-data">
          <label>Icon</label>
          <input type="text" placeholder='Paste single emoji' onChange={(e) => setIcon(e.target.value)}/>
          </div>
          <div className="weekly-form-data">
          <label>More</label>
          <input type="text" placeholder='(optional)' onChange={(e) => setDesc(e.target.value)}/>
          </div>
          <a href="https://getemoji.com/" target='blank'>Get emoji</a>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="login-form-button"
            onClick={handleDispatch}
          >
            Add
          </motion.button>
        </form>
        
      </motion.div>
    </Backdrop>
  )
}

export default TodaysTasksModal
