import { GithubIcon } from "lucide-react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";

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
                <NavLink>Home</NavLink>
              </li>
              <li>
                <NavLink>Apps</NavLink>
              </li>
              <li>
                <NavLink>Installation</NavLink>
              </li>
            </ul>
          </div>
          <Link className="text-xl flex items-center font-bold gap-2">
            <img src={logo} alt="Website Logo" className="w-10" />
            HERO.IO
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>Apps</NavLink>
            </li>
            <li>
              <NavLink>Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={"/"} className="btn">
            <span>
              <GithubIcon></GithubIcon>
            </span>
            Contribution
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
