import React, { useEffect, useState } from "react";
import MobileNav from './MobileNav'
import DesktopNav from "./DesktopNav";
import styles from './NavBar.module.css'

const NavBar = () => {
  const [isMobile,setIsMobile] = useState(false)

  useEffect(()=>{
    const handleScreenResize = ()=>{
     const screenWidth = window.innerWidth
     console.log(screenWidth)
     if(screenWidth <= 1000){
        setIsMobile(true)
     }
     else {
      setIsMobile(false)
     }
    }
    window.addEventListener('resize', handleScreenResize);
    return () => {
      window.removeEventListener('resize', handleScreenResize);
    };
  },[])

  return (
    <nav className={styles.nav}>
      {isMobile ?  <MobileNav/> : <DesktopNav/>}
    </nav>
  )
};

export default NavBar;
