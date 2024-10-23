"use client";

import { useState } from "react";
import {
  Bars3Icon,
  HomeIcon,
  BriefcaseIcon,
  CalendarIcon,
  Cog6ToothIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/outline";

const DefaultSidebar = () => {
  const [activeItem, setActiveItem] = useState("overview");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleActiveItem = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div
      className={`h-screen bg-white shadow-lg flex flex-col ${
        isCollapsed ? "w-20" : "w-64"
      } transition-all duration-300 sticky top-0`}
    >
      <div className={`p-4 gap-4 flex items-center ${isCollapsed ? "justify-center" : ""}`}>
        <button onClick={toggleSidebar}>
          <Bars3Icon className="h-6 w-6 text-gray-600" />
        </button>
        <h1
          className={`text-2xl font-bold text-gray-800 ${
            isCollapsed ? "hidden" : "block"
          }`}
        >
          Wizz
        </h1>
      </div>

      <nav className="flex-grow mt-8">
        <ul>
          <li
            onClick={() => handleActiveItem("overview")}
            className={`relative flex items-center p-4 cursor-pointer ${
              activeItem === "overview"
                ?  " text-green-500"
                : "hover:bg-gray-100"
            }`}
          >
            {/* Left Indicator for Active Item */}
            {activeItem === "overview" && (
              <div className="absolute left-0 h-10 w-1 bg-green-500 rounded-r"></div>
            )}
            <HomeIcon
              className={`h-6 w-6 ${
                activeItem === "overview" ? "text-green-500" : "text-gray-500"
              } ${isCollapsed ? "mx-auto" : "mr-4"}`}
            />
            {!isCollapsed && (
              <span  className={`text-lg text-gray-500 ${
                activeItem === "overview" ? "text-green-500 font-semibold" : ""
              }`}>
                Overview
              </span>
            )}
          </li>

          <li
            onClick={() => handleActiveItem("bounties")}
            className={`relative flex items-center p-4 cursor-pointer ${
              activeItem === "bounties"
                ? " text-green-500"
                : "hover:bg-gray-100"
            }`}
          >
            {activeItem === "bounties" && (
              <div className="absolute left-0 h-10 w-1 bg-green-500 rounded-r"></div>
            )}
            <BriefcaseIcon
              className={`h-6 w-6 ${
                activeItem === "bounties" ? "text-green-500" : "text-gray-500"
              } ${isCollapsed ? "mx-auto" : "mr-4"}`}
            />
            {!isCollapsed && (
              <span  className={`text-lg text-gray-500 ${
                activeItem === "bounties" ? "text-green-500 font-semibold" : ""
              }`}>
                Bounties
              </span>
            )}
          </li>

          <li
            onClick={() => handleActiveItem("projects")}
            className={`relative flex items-center p-4 cursor-pointer ${
              activeItem === "projects"
                ? " text-green-500"
                : "hover:bg-gray-100"
            }`}
          >
            {activeItem === "projects" && (
              <div className="absolute left-0 h-10 w-1 bg-green-500 rounded-r"></div>
            )}
            <CalendarIcon
              className={`h-6 w-6 ${
                activeItem === "projects" ? "text-green-500" : "text-gray-500"
              } ${isCollapsed ? "mx-auto" : "mr-4"}`}
            />
            {!isCollapsed && (
              <span className={`text-lg text-gray-500 ${
                activeItem === "projects" ? "text-green-500 font-semibold" : ""
              }`}>
                Projects
              </span>
            )}
          </li>
        </ul>
      </nav>

      {/* Settings and Log Out at the Bottom */}
      <nav className="mb-4">
        <ul>
          <li
            onClick={() => handleActiveItem("settings")}
            className={`relative flex items-center p-4 cursor-pointer ${
              activeItem === "settings"
                ? " text-green-500"
                : "hover:bg-gray-100"
            }`}
          >
            {activeItem === "settings" && (
              <div className="absolute left-0 h-10 w-1 bg-green-500 rounded-r"></div>
            )}
            <Cog6ToothIcon
              className={`h-6 w-6 ${
                activeItem === "settings" ? "text-green-500" : "text-gray-500"
              } ${isCollapsed ? "mx-auto" : "mr-4"}`}
            />
            {!isCollapsed && (
              <span className={`text-lg text-gray-500 ${
                activeItem === "settings" ? "text-green-500 font-semibold" : ""
              }`}>
                Settings
              </span>
            )}
          </li>

          <li
            onClick={() => handleActiveItem("logout")}
            className={`relative flex items-center p-4 cursor-pointer ${
              activeItem === "logout"
                ? " text-green-500"
                : "hover:bg-gray-100"
            }`}
          >
            {activeItem === "logout" && (
              <div className="absolute left-0 h-10 w-1 bg-green-500 rounded-r"></div>
            )}
            <ArrowLeftEndOnRectangleIcon
              className={`h-6 w-6 ${
                activeItem === "logout" ? "text-green-500" : "text-gray-500"
              } ${isCollapsed ? "mx-auto" : "mr-4"}`}
            />
            {!isCollapsed && (
              <span className={`text-lg text-gray-500 ${
                activeItem === "logout" ? "text-green-500 font-semibold" : ""
              }`}>Log Out</span>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DefaultSidebar;