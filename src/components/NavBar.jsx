import React from "react";

function NavBar(props) {
  return (
    <nav className="w-screen flex items-center gap-[5rem] text-white px-[10rem] py-[3.5rem] ">
      {["Home", "Story", "Profile"].map((item) => (
        <button
          className={`text-[2.5rem] hover:shake ${
            props.page === item.toLowerCase()
              ? "text-[rgb(255,0,0)]"
              : "hover:text-[rgb(255,0,0)] hover:opacity-70"
          } duration-200`}
          onClick={() => {
            if (props.page === item.toLowerCase()) return;
            props.setIsTransitioning(true);

            setTimeout(() => {
              props.setPage(item.toLowerCase());

              setTimeout(() => {
                props.setIsTransitioning(false);
              }, 1000);
            }, 2500);
          }}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
