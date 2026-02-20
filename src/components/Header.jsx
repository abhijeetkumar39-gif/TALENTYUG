"use client";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import logo from "../public/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu if window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className={styles.pageBg}>
      <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""} ${menuOpen ? styles.navbarMenuOpen : ""}`}>
        
        {/* Logo LEFT */}
        <div className={styles.logo}>
          <img src={logo} alt="TalentYug Logo" className={styles.logoImg} />
        </div>

        {/* Hamburger - visible on small screens */}
        <button
          type="button"
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={menuOpen ? styles.hamburgerLineOpen1 : styles.hamburgerLine1} />
          <span className={menuOpen ? styles.hamburgerLineOpen2 : styles.hamburgerLine2} />
          <span className={menuOpen ? styles.hamburgerLineOpen3 : styles.hamburgerLine3} />
        </button>

        {/* RIGHT SIDE (Menu + Buttons) - desktop & mobile */}
        <div className={`${styles.rightSection} ${menuOpen ? styles.rightSectionOpen : ""}`}>
          <ul className={styles.menu} onClick={() => setMenuOpen(false)}>
            <li >
              <Link to="/colleges" className={styles.menuLink}>COLLEGES</Link>
              </li>
            <li>COMPANIES</li>
            <li>STUDENTS</li>
          </ul>
          <div className={styles.buttons}>
            <button className={styles.loginBtn}>Login</button>
            <button className={styles.registerBtn}>Register</button>
          </div>
        </div>
      </nav>
      {/* Backdrop for mobile when menu open */}
      <div
        className={`${styles.backdrop} ${menuOpen ? styles.backdropVisible : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </div>
  );
};

export default Header;
