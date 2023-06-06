import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [fixedNav, setFixedNav] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navHeight = navRef.current.getBoundingClientRect().height;
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > navHeight) {
        setFixedNav(true);
      } else {
        setFixedNav(false);
      }
    });
    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <nav
      className={fixedNav ? "fixed_navbar" : "ai_navbar gradient_bg"}
      ref={navRef}
    >
      <div className="ai_navbar-links">
        <div className="ai_navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="ai_navbar-links-container">
          <a href="#home">Home</a>
          <a href="#wgpt3">What is AI</a>
          <a href="#possibility">Open AI</a>
          <a href="#case studies"> Case Studies</a>
          <a href="#library">Library</a>
        </div>
      </div>

      <div className="ai_navbar-sign">
        <p>sign in</p>
        <button type="button">Sign up</button>
      </div>

      <div className="ai_navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="ai_navbar-menu-container scale-up-center">
            <div className="ai_navbar-menu-container-links">
              <a href="#home">Home</a>
              <a href="#wgpt3">What is AI</a>
              <a href="#possibility">Open AI</a>
              <a href="#case studies"> Case Studies</a>
              <a href="#library">Library</a>
            </div>

            <div className="ai_navbar-menu-container-links-sign">
              <p>sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
