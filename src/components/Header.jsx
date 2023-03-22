import React, { useEffect } from "react";
import styles from './Header.module.css'
import { useState } from "react";
import photo from '../assets/photo.png'

const Header = () => {
const [scrollValue,setScrollValue] = useState(0)
const [h1Translate,seth1Translate] = useState(0)
const [h2Translate,seth2Translate] = useState(0)
const [photoOpacityValue,setPhotoOpacityValue] = useState(1)

useEffect(()=>{

  function handleScroll() {
    setScrollValue(window.scrollY);
  }

  window.addEventListener("scroll", handleScroll);

  const windowHeight = window.innerHeight
  const maxScrollY = document.body.clientHeight - windowHeight;
  const scrollPercentage = 1 - 4*(scrollValue / maxScrollY);

  const h1TranslateValue =(scrollValue * .5)
  const h2TranslateValue = -(scrollValue * .5)

  seth1Translate(h1TranslateValue);
  seth2Translate(h2TranslateValue)
  setPhotoOpacityValue(scrollPercentage)

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };

},[scrollValue])


const changeOnScroll = {
  right: {
    left: 0,
    transform: `translateX(${h1Translate}px) translateY(-50%)`
  },
  left: {
    right: 0,
    transform: `translateX(${h2Translate}px) translateY(-50%)`
  },
  photo:{
    opacity: `${photoOpacityValue}`
  }
};

  return (
    <div className={styles.head} id="header">
      <main>
        <div>
          <img style={changeOnScroll.photo} src={photo} alt="put your image here " />
        </div>
      </main>
      <aside>
        <h1 style={changeOnScroll.right}>I'm Krystian Sporysz</h1>
        <h2 style={changeOnScroll.left}>Softwere Developer</h2>
        <h2 style={changeOnScroll.right}>Based in Poland</h2>
      </aside>
    </div>
  );
};

export default Header;
