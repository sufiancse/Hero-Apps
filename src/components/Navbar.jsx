import { GithubIcon } from "lucide-react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar   max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold"
                      : "font-medium hover:text-purple-500"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/apps"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold"
                      : "font-medium hover:text-purple-500"
                  }
                >
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/installation"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold"
                      : "font-medium hover:text-purple-500"
                  }
                >
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to={"/"}
            className="text-xl flex items-center font-bold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent gap-2"
          >
            <img src={logo} alt="Website Logo" className="w-10" />
            DEV APPS
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 px-1">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text border-b-2 border-purple-500 text-transparent font-semibold"
                    : "font-medium hover:text-purple-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/apps"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text border-b-2 border-purple-500 text-transparent font-semibold"
                    : "font-medium hover:text-purple-500"
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/installation"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text border-b-2 border-purple-500 text-transparent font-semibold"
                    : "font-medium hover:text-purple-500"
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/sufiancse" target="_blank">
            <button className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold">
              <span className="text-xl">
                <FaGithub></FaGithub>
              </span>
              Contribution
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
