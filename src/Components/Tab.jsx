import { NavLink } from "react-router-dom";
import ThemeChanger from "./ThemeChanger";

const Tab = () => {
  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-2xl text-sky-600">
            AnimeSaga
          </a>
        </div>

        <div className="flex-none ">
          {/* Tab navigation */}
          <div role="tablist" className="tabs tabs-lifted mr-4">
            <NavLink
              to="/"
              role="tab"
              className={({ isActive }) =>
                `tab ${
                  isActive
                    ? "tab-active text-sky-300 [--tab-bg:black] [--tab-border-color:blue] font-normal"
                    : "font-bold"
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
                    ? "tab-active text-sky-300 [--tab-bg:black] [--tab-border-color:blue] font-normal"
                    : "font-bold"
                }`
              }
            >
              Anime Hunt
            </NavLink>
            <NavLink
              to="/skills"
              role="tab"
              className={({ isActive }) =>
                `tab ${
                  isActive
                    ? "tab-active text-sky-300 [--tab-bg:black] [--tab-border-color:blue] font-normal"
                    : "font-bold"
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
