import React, { useContext, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
  const {user, logout} = useContext(AuthContext)
    const [open, setOpen] = useState(false);
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
      <div>
        <div className="bg-black md:bg-[#9873ff21] text-white md:text-black">
          <nav className=" px-5 md:px-0 max-w-6xl mx-auto md:flex lg:flex justify-between md:items-center py-3">
            <div className="logo">
              <Link to="/">
                <h1 className="font-bold text-3xl text-green-500 ">
                  The Green Elephant
                </h1>
              </Link>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="absolute md:hidden text-3xl right-6 top-6"
            >
              {open === false ? (
                <ion-icon name="menu"></ion-icon>
              ) : (
                <ion-icon name="close"></ion-icon>
              )}
            </div>
            <ul
              className={`md:flex bg-black md:bg-[#F2EDFF] lg:bg-[#F2EDFF]  lg:flex gap-6 font-semibold lg:items-center absolute md:static lg:static md:z-auto z-[1] left-0 pl-9 md:pl-0 w-full md:w-auto  ${
                open ? "top-20" : "top-[-490px]"
              }`}
            >
              {link.map((l, index) => (
                <NavLink
                  key={index}
                  to={l.href}
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  <li className="my-3 md:my-0 ">{l.name}</li>
                </NavLink>
              ))}
              {user && (
                <>
                  <div
                    className="tooltip tooltip-bottom"
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
              <div className="md:flex gap-2">
                <div className="mb-2">
                  {user ? (
                    <button onClick={handleLogout} className="btn btn-primary">
                      Logout
                    </button>
                  ) : (
                    <Link to="/login">
                      <button className="btn btn-bg text-white">Login</button>
                    </Link>
                  )}
                </div>
                <div>
                  <Link to="/register">
                    <button className="btn btn-bg text-white">Register</button>
                  </Link>
                </div>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    );
};

export default Header;