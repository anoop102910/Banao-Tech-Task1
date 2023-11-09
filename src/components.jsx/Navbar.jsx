import React from "react";
import { FaSearch } from "react-icons/fa";

function Navbar({onCreateAccount}) {
  return (
    <nav className="px-4 py-2.5 flex justify-between items-center">
      <div className=" font-bold text md:text-xl uppercase">
        atgworld
      </div>
      <div className="items-center search border bg-gray-300 pl-3  py-2 rounded-3xl hidden sm:flex">
        <FaSearch className=" mr-2 text-gray-500" />
        <input
          type="text"
          placeholder="Search for your favourite groups in ATG"
          className="bg-transparent text-gray-700 placeholder:font-bold w-80 text-sm outline-none border-none pl-2"
        />
      </div>
      <div className="text-sm font-bold ">
        Create Account. <span onClick={onCreateAccount} className="text-blue-700 cursor-pointer">It's free</span>
      </div>
    </nav>
  );
}

export default Navbar;
