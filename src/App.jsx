import React from "react";
import Soundtrack from "./components/Soundtrack";
import useCursorEffect from "./components/useCursorEffect";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Window from "./components/Window";
import Story from "./pages/Story";
import Profile from "./pages/Profile";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

function App() {
  // Cursor effect
  useCursorEffect();

  // Manage pages
  const [page, setPage] = React.useState("home");

  // Manage transition
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  // Loading state
  const [isLoading, setIsLoading] = React.useState(true);

  // Counter
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      const timer = setInterval(() => {
        setCounter((prevState) => prevState + 100);
      }, 100);

      setTimeout(() => {
        clearInterval(timer);
        setIsTransitioning(true);

        setTimeout(() => {
          setIsLoading(false);

          setTimeout(() => {
            setIsTransitioning(false);
          }, 1000);
        }, 2500);
      }, 5000);
    }, 4000);
  }, []);

  return (
    <div className="h-screen relative" id="app">
      {!isLoading && (
        <>
          <Soundtrack />
          {/* Nav bar */}
          <NavBar
            page={page}
            setPage={setPage}
            setIsTransitioning={setIsTransitioning}
          />
          <div className={`${isTransitioning && "opacity-80"} duration-100`}>
            {page === "home" && <Home />}
            {page === "story" && <Story />}
            {page === "profile" && <Profile />}
          </div>
          {/* Credits */}
          <span className="absolute left-[10rem] bottom-[3rem] text-[1.4rem] text-[#ffffff90]">
            &copy; 2023, All rights reserved.
          </span>
        </>
      )}

      {isLoading && (
        <>
          <div className="h-full flex items-center justify-center flex-col gap-[3rem] z-[1000] bg-black">
            {counter < 5000 && (
              <>
                <span className="text-[3rem]">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString("Initializing...").start();
                    }}
                  />
                </span>
                <div className="flex items-center gap-[2rem]">
                  <motion.div
                    initial={{ width: "10rem", opacity: 0 }}
                    animate={{ width: "50rem", opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                    className="border border-[red] h-[3rem] p-[.7rem]"
                  >
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 4, duration: 5 }}
                      className="bg-[#ff000098] h-full block"
                    >
                      &nbsp;
                    </motion.span>
                  </motion.div>
                  <span
                    className={`text-[red] ${
                      counter ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {counter <= 5000
                      ? `${Number((counter / 5000) * 100).toFixed(2)}%`
                      : "100%"}
                    {}
                  </span>
                </div>
              </>
            )}
          </div>
        </>
      )}

      {/* Window */}
      <Window
        isTransitioning={isTransitioning}
        setIsTransitioning={setIsTransitioning}
      />
    </div>
  );
}

export default App;
