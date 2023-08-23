import React from "react";

function Navbar({ redirect }) {
  return (
    <nav className="w-full h-10 xs:h-16 bg-[#141414] top-0 flex justify-between items-center sticky">
      <button onClick={() => redirect("")}>
        <img
          src="/icon.svg"
          alt="logo"
          className="w-14 h-14 xs:w-24 xs:h-24 m-3 ml-0"
        />
      </button>

      <div className="float-left mr-5 space-x-2 xs:space-x-4 sm:text-xl">
        <button onClick={() => redirect("about")} className="hover:font-bold">
          About
        </button>

        <button
          onClick={() => redirect("projects")}
          className="hover:font-bold"
        >
          Projects
        </button>

        <button onClick={() => redirect("contact")} className="hover:font-bold">
          Contact
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
