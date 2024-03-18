import React, { FC, useState } from "react";
import { SidebarProps } from "./Sidebar";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";

const LoginRegisterModal: FC<SidebarProps> = ({ setOpenModal }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
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

  const handleSubmit:React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    axios.post('http://localhost:80/api/user/save', {username, password})
    
    
  }
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
        <div className="WeeklyModal">
          <h2>Login</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpenModal(false)}
          >
            <IoCloseSharp />
          </motion.button>
        </div>
        <form className="weekly-form" onSubmit={handleSubmit}>
          <div className="login-form-data">
            <label>Username</label>
            <input type="text" onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="login-form-data">
            <label>Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="login-form-button"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </Backdrop>
  );
};

export default LoginRegisterModal;
