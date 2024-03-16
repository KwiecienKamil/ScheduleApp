import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { SidebarProps } from "./Sidebar";

const Profile = ({setOpenModal}:SidebarProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <section>
      {isLoggedIn ? (
        <div className="profile">
          <div>
            <h6>Kamil Kwiecień</h6>
            <p>My settings</p>
          </div>
          <span className="profile-icon">
            <FaRegUserCircle size={20} />
          </span>
        </div>
      ) : (
        <div className="profile-login-register">
          <motion.button onClick={() => setOpenModal(true)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            Login / Register
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default Profile;
