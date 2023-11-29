import React from "react";
import MobileNav from './MobileNav'
import DesktopNav from "./DesktopNav";
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.nav}>
    <DesktopNav/>
    <MobileNav/>
    </nav>
  )
};

export default NavBar;
