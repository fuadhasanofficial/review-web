import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("log out succsess");
      })
      .catch((err) => console.log(err));
  };
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };

  return (
    <nav className="mb-5">
      <div className="hidden lg:block">
        <ul className="lg:flex bg-indigo-200 text-center justify-center font-bold p-3">
          <li className="mr-2">
            {" "}
            <Link to="/"> Home</Link>
          </li>
          <li className="mr-2">
            {" "}
            <Link to="/my-review">Review</Link>{" "}
          </li>
          <li className="mr-2">
            {user?.email ? (
              <Link onClick={handleLogOut}>Logout</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
      <div className="lg:hidden flex  bg-indigo-200">
        <label className="btn btn-circle swap swap-rotate ">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onClick={showMenu} />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      {menu && (
        <>
          <div>
            <ul className=" lg:hidden md:hidden bg-indigo-200 text-center justify-center font-bold p-3">
              <li className="mr-2">Home</li>
              <li className="mr-2">Review</li>
              <li className="mr-2">
                {user?.email ? (
                  <Link onClick={handleLogOut}>Logout</Link>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
