import React from "react";

function VideoBackground(props) {
  return (
    <video
      src={props.src}
      autoPlay={true}
      controlsList="nodownload"
      className="w-full h-full object-cover absolute top-0 left-0 z-[-1000]"
      loop={true}
      muted={true}
    ></video>
  );
}

export default VideoBackground;
