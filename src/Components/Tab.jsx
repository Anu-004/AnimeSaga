import { NavLink, Routes, Route } from "react-router-dom";
import ThemeChanger from "./ThemeChanger";

const Tab = () => {
  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">AnimeSaga</a>
        </div>

        <div className="flex-none">
          {/* Tab navigation */}
          <div role="tablist" className="tabs tabs-lifted">
            <NavLink
              to="/about"
              role="tab"
              className={({ isActive }) =>
                `tab ${
                  isActive
                    ? "tab-active text-pink-500 [--tab-bg:black] [--tab-border-color:pink]"
                    : ""
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              role="tab"
              className={({ isActive }) =>
                `tab ${
                  isActive
                    ? "tab-active text-pink-500 [--tab-bg:black] [--tab-border-color:pink]"
                    : ""
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/skills"
              role="tab"
              className={({ isActive }) =>
                `tab ${
                  isActive
                    ? "tab-active text-blue-100 [--tab-bg:black] [--tab-border-color:blue]"
                    : ""
                }`
              }
            >
              Tech Stacks
            </NavLink>
          </div>
          <ThemeChanger />
        </div>
      </div>
    </>
  );
};

export default Tab;
