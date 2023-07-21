import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function Window(props) {
  return (
    <AnimatePresence>
      {props.isTransitioning && (
        <motion.div className="absolute w-full h-full top-0 left-0 flex justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[30rem] h-[30rem] rounded-full flex items-center justify-center bg-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="w-[15rem] h-[15rem]"
            >
              <path
                fill="white"
                d="M14 4.577v6.846L8 15l-6-3.577V4.577L8 1l6 3.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"
              />
            </svg>
          </motion.div>
          {/* Left half */}
          <motion.div
            initial={{ x: "-120%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            exit={{ x: "-120%" }}
            className="w-[50%] h-full flex items-center"
          >
            <div className="flex-grow h-full overflow-hidden relative left-window"></div>
            {/* Left window Border lines */}
            <div className="flex flex-col gap-[29.6rem] h-full">
              <span className="w-[1px] bg-white h-full">&nbsp;</span>
              <span className="w-[1px] bg-white h-full">&nbsp;</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: "120%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            exit={{ x: "120%" }}
            className="w-[50%] h-full flex items-center"
          >
            {/* Left window Border lines */}
            <div className="flex flex-col gap-[29.6rem] h-full">
              <span className="w-[1px] bg-white h-full">&nbsp;</span>
              <span className="w-[1px] bg-white h-full">&nbsp;</span>
            </div>

            <div className="flex-grow h-full overflow-hidden relative right-window"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Window;
