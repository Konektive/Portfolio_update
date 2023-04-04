import React from 'react'
import styles from './DesktopNav.module.css'
import logoimage from '../../assets/logo.png'
import CV from '../../assets/Krystian Sporysz CV.pdf'

const DesktopNav = () => {
  return (
    <nav className={styles.desktop}>
    <div className={styles.logo}>
      <img src={logoimage} alt="" />
    </div>
    <div className={styles.navigation}>
      <a href="#home">Home</a>
      <a href="#projects">Work</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
  )
}

export default DesktopNav