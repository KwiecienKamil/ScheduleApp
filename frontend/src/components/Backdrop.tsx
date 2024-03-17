import React, { FC} from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

type BackdropType = {
  children: React.ReactNode;
};

const Backdrop: FC<BackdropType> = ({children}) => {
  return ReactDOM.createPortal(
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
       {children}
    </motion.div>,
    document.getElementById("portal")!
  );
};
export default Backdrop;
