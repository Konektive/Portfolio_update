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
      <a href="#header">Home</a>
      <a href="#projects">Portfolio</a>
      <a href="#contact">Contact</a>
      <a href={CV} download="Krystian_Sporysz_CV">CV</a>
    </div>
  </nav>
  )
}

export default DesktopNav