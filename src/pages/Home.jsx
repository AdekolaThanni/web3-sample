import React from "react";
import VideoBackground from "../components/VideoBackground";

function Home() {
  return (
    <>
      <VideoBackground src="https://res.cloudinary.com/dlanhtzbw/video/upload/v1689889614/bg-video_kfxsb9_v9kp7x.mp4" />
      {/* Connect wallet */}
      <button className="ml-[10rem] mt-[23rem] border-2 border-white px-[7rem] py-[2rem] text-[2rem] shadow-md bg-[#ffffff10] backdrop-blur-sm hover:shake hover:border-[rgb(255,0,0)] hover:text-[rgb(255,0,0)] duration-200">
        Connect Wallet
      </button>
    </>
  );
}

export default Home;
