import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaLocationArrow,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  // Hours of working array
  const hours = [
    {
      id: 1,
      day: "Monday  :-",
      time: "  9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday  :-",
      time: "  8:00 AM - 10:00 PM",
    },
    {
      id: 3,
      day: "Wednesday  :-",
      time: "  7:00 AM - 11:00 PM",
    },
    {
      id: 4,
      day: "Thursday  :-",
      time: "  7:00 AM - 10:00 PM",
    },
    {
      id: 5,
      day: "Friday  :-",
      time: "  6:00 AM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday  :-",
      time: "  7:00 AM - 8:00 PM",
    },
    {
      id: 7,
      day: "Sunday  :-",
      time: "  6:00 AM - 11:00 PM",
    },
  ];

  return (
    <>
      <footer className="container">
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img" />
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            {hours.map((element) => {
              return (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              );
            })}
          </div>

          <div>
            <h4>Contact</h4>
            <div>
              <FaPhoneAlt />
              <a style={{ textDecoration: "none", color: "black" }} href="">
                <span>Phone Number</span>
              </a>
            </div>
            <div>
              <MdEmail />
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="mailto: vishalkumar211103@gmail.com"
                target="_blank"
              >
                <span>Email</span>
              </a>
            </div>
            <div>
              <FaLocationArrow />
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://www.google.com/maps/place/Global+Institute+of+Technology+%26+Management+(+GITM+)/@28.446298,76.2474032,10z/data=!4m10!1m2!2m1!1sgitm!3m6!1s0x390d6bab65a4c0c9:0xf41d605e3cf00f59!8m2!3d28.446298!4d76.774747!15sCgRnaXRtkgEHY29sbGVnZeABAA!16s%2Fm%2F0cr2k7_?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                <span>Gurgaon,India</span>
              </a>
            </div>
            <div>
              <FaLinkedin />
              <span>
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href="https://www.linkedin.com/in/vishal-kumar-b78151236/"
                  target="_blank"
                >
                  Vishal Kumar
                </a>
              </span>
            </div>
            <div>
              <FaGithub />
              <span>
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href="https://github.com/Official-CIPHER"
                  target="_blank"
                >
                  Vishal Kumar
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
