import React from "react";

function Soundtrack() {
  const audioRef = React.useRef();
  const [soundPlaying, setSoundPlaying] = React.useState();

  const sound = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        strokeWidth={2}
        d="M11.996 3.006c0-.873-1.04-1.327-1.68-.733L6.444 5.866a.5.5 0 0 1-.34.134H3.496a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h2.608a.5.5 0 0 1 .34.133l3.872 3.594c.64.593 1.68.14 1.68-.733V3.006ZM7.124 6.599l3.872-3.593v13.988L7.124 13.4a1.5 1.5 0 0 0-1.02-.4H3.496a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h2.608a1.5 1.5 0 0 0 1.02-.4Zm8.132-1.972a.5.5 0 0 1 .706.04a8 8 0 0 1 0 10.666a.5.5 0 0 1-.745-.667a7 7 0 0 0 0-9.333a.5.5 0 0 1 .039-.706Zm-1.176 8.306a.5.5 0 0 1-.183-.683a4.498 4.498 0 0 0 0-4.5a.5.5 0 1 1 .865-.5a5.498 5.498 0 0 1 .001 5.5a.5.5 0 0 1-.683.183Z"
      />
    </svg>
  );

  const soundMuted = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        strokeWidth={2}
        d="M2.853 2.146a.5.5 0 1 0-.708.708L5.292 6H3.496a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h2.608a.5.5 0 0 1 .34.133l3.872 3.594c.64.594 1.68.14 1.68-.733v-4.29l5.15 5.15a.5.5 0 0 0 .707-.708l-2.563-2.562L2.853 2.146Zm8.143 9.558v5.29L7.124 13.4a1.5 1.5 0 0 0-1.02-.4H3.496a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h2.608c.06 0 .119-.004.177-.01l4.715 4.714Zm0-8.698v5.87l1 1v-6.87c0-.873-1.04-1.327-1.68-.733l-3.072 2.85l.708.708l3.044-2.825Zm3.064 8.934l.742.741a5.497 5.497 0 0 0-.04-5.431a.5.5 0 1 0-.866.5c.77 1.333.78 2.896.164 4.19Zm1.835 1.835l.722.722a8.003 8.003 0 0 0-.655-9.83a.5.5 0 1 0-.745.667a7.004 7.004 0 0 1 .678 8.441Z"
      />
    </svg>
  );

  return (
    <div className="">
      <audio
        src="https://res.cloudinary.com/dlanhtzbw/video/upload/v1689885892/soundtrack_hb6evw.mp3"
        controlsList="nodownload"
        controls
        ref={audioRef}
        onPlay={(event) => {
          event.currentTarget.volume = 0.5;
        }}
        className="hidden"
        loop
      ></audio>
      <button
        onClick={() => {
          if (soundPlaying) {
            audioRef.current.pause();
            setSoundPlaying(false);
          } else {
            audioRef.current.play();
            setSoundPlaying(true);
          }
        }}
        className="absolute bottom-[3rem] right-[3rem] text-white flex items-center gap-[.5rem]"
      >
        {soundPlaying && (
          <>
            <span>Mute Sound</span> {soundMuted}
          </>
        )}
        {!soundPlaying && (
          <>
            <span>Play Sound </span> {sound}
          </>
        )}
      </button>
    </div>
  );
}

export default Soundtrack;
