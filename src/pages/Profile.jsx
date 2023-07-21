import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function Profile() {
  return (
    <>
      <img
        src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1689885888/4127298_sbidrt.jpg"
        alt="background"
        className="w-screen h-full object-center absolute top-0 left-0 z-[-1000]"
      />
      <div className="flex items-start gap-[10rem] mx-[10rem]">
        <motion.div
          initial={{ x: "-50rem" }}
          animate={{ x: 0 }}
          transition={{ delay: 2.7, duration: 0.5 }}
          className="cut-card w-[40rem] h-[60rem] border border-[5px] p-[.5rem] bg-[#ffffff10] backdrop-blur-sm"
        >
          <img
            src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1689963814/avatar_g4pmfy.jpg"
            alt=""
            className="w-full h-full cut-card"
          />
        </motion.div>

        <div className="">
          <p className="text-[6rem]">AZULA</p>
          <p className="max-w-[80rem]">
            <Typewriter
              delay={1}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `In the heat of battle, she emerges as a beacon of strength and valor - a female warrior unyielding in her resolve. Her eye blaze with determination, reflecting the wisdom of countless struggles. With each strike, she weaves a symphony of lethal grace, wielding her weapon with masterful precision.
                    `
                  )
                  .start();
              }}
            />
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile;
