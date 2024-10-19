"use client";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import { useState } from "react";

const Sidebar = ({ addWall }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      className={`sidebar border border-gray-600 text-gray-900 bg-[#F5F5F5] relative h-screen ${
        isExpanded ? "expanded" : ""
      }`}
    >
      <button
        className={`toggle-button hover:border-[#84B469] hover:bg-[#D5E8D4] flex justify-center items-center border border-gray-800 bg-white w-10 h-10 rounded-full cursor-pointer absolute top-1/2 ${
          isExpanded ? "-right-5" : "right-1.5"
        }`}
        onClick={toggleSidebar}
      >
        {isExpanded ? (
          <SlArrowLeft className="text-[#1B8DF1] w-5 h-5" />
        ) : (
          <SlArrowRight className="text-[#1B8DF1] w-5 h-5" />
        )}
      </button>
      {isExpanded && (
        <nav className="sidebar-nav">
          <ul className="flex flex-col justify-center items-center">
            <p className="font-semibold text-xl">Elements</p>
            <li onClick={addWall} className="btn">
              Add wall
            </li>
            <li className="btn">Add door</li>
            <li className="btn">Add rack</li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
