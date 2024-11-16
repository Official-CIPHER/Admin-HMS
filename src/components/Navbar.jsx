import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  // Show State
  const [show, setShow] = useState(false);

  // using isAuthenticated from the main.jsx
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  // function that handle logout
  const handleLogout = async () => {
    await axios
      .get(
        "https://hospital-management-system-da7n.onrender.com/api/v1/user/patient/logout",
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  // Use to navigate at some specific part
  const navigateTo = useNavigate();

  // function that handle login
  const gotoLogin = () => {
    navigateTo("/login");
  };

  return (
    <nav className="container">
      <div className="logo">
        <img src="/logo.png" alt="logo" className="logo-img" />
      </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to={"/"}>Home</Link>
          <Link to={"/appointment"}>Appointment</Link>
          <Link to={"/about"}>About US</Link>
        </div>

        {/* if user is Authenticated then show Logout otherwise login */}
        {isAuthenticated ? (
          <button className="logoutBtn btn" onClick={handleLogout}>
            LOGOUT
          </button>
        ) : (
          <button className="logoutBtn btn" onClick={gotoLogin}>
            LOGIN
          </button>
        )}
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
