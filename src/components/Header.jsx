"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import logo from "../public/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.pageBg}>
      <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
        
        {/* Logo LEFT */}
        <div className={styles.logo}>
          <img src={logo} alt="TalentYug Logo" className={styles.logoImg} />
        </div>

        {/* RIGHT SIDE (Menu + Buttons together) */}
        <div className={styles.rightSection}>
          
          <ul className={styles.menu}>
            <li>COLLEGES</li>
            <li>COMPANIES</li>
            <li>STUDENTS</li>
          </ul>

          <div className={styles.buttons}>
            <button className={styles.loginBtn}>Login</button>
            <button className={styles.registerBtn}>Register</button>
          </div>

        </div>

      </nav>
    </div>
  );
};

export default Header;
