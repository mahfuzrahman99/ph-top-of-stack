import logo from "../assets/task-logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          className="font-bold bg-transparent hover:bg-transparent"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className="font-bold"
        >
          Offer
        </NavLink>
      </li>
      <li>
        <NavLink
          className="font-bold"
        >
          Airlines
        </NavLink>
      </li>
      <li>
        <NavLink
          className="font-bold"
        >
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar z-10 max-w-5xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5  text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <Link className="flex justify-center items-center">
            <figure>
              <img
                className="w-24 h-14  md:w-32 md:h-10  hidden md:block"
                src={logo}
                alt="logo"
              />
            </figure>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end flex items-center">
          <button className="md:btn btn-sm border-none bg-[#006ce4] hover:bg-[#006ce4] md:bg-[#006ce4] rounded-md text-white md:text-white px-4 md:px-7">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
