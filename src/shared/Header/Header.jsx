import React, { useContext, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
  const {user, logout} = useContext(AuthContext)
    const link = [
      { name: "Home", href: "/" },
      { name: " Blogs", href: "/blogs" },
    ];
    const handleLogout = () =>{
      logout()
        .then()
        .catch((error) => {
          console.log(error);
        });
    }
    return (
      <div className='bg-gray-100 py-2'>
        <div className="navbar my-container">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
              </ul>
            </div>
            <Link to="/">
              <h1 className="font-bold text-3xl text-green-500 hidden md:block ">
                The Green Elephant
              </h1>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 md:flex gap-7">
              {link.map((l, index) => (
                <NavLink
                  key={index}
                  to={l.href}
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  <li className="my-3 md:my-0 font-bold ">{l.name}</li>
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="navbar-end md:flex gap-6">
            <div>
              {user && (
                <>
                  {/* <p>{user?.displayName}</p> */}
                  <div
                    className="tooltip tooltip-left"
                    data-tip={user?.displayName}
                  >
                    <img
                      className="  w-[40px] h-[40px] rounded-full "
                      src={user?.photoURL}
                      alt=""
                    />
                  </div>
                </>
              )}
            </div>
            <div>
              {user ? (
                <button onClick={handleLogout} className="btn btn-primary">
                  Logout
                </button>
              ) : (
                <div className='flex'>
                  <Link to="/login">
                    <button className="btn mr-2 btn-bg text-white">
                      Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="btn btn-bg text-white">Register</button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;