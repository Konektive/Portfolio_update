import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { useState } from "react";
import NavBar from "./Nav/NavBar";
import linked from "../assets/linkedIcon.png";
import insta from "../assets/instaIcon.png";
import git from "../assets/gitIcon.png";

const Header = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [h1Translate, seth1Translate] = useState(0);
  const [h2Translate, seth2Translate] = useState(0);
  const [photoOpacityValue, setPhotoOpacityValue] = useState(1);
  const isDesktop = window.innerWidth > 768

  useEffect(() => {
    function handleScroll() {
      setScrollValue(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    const windowHeight = window.innerHeight;
    const maxScrollY = document.body.clientHeight - windowHeight;
    const scrollPercentage = 1 - 4 * (scrollValue / maxScrollY);

    const h1TranslateValue = scrollValue * 0.5;
    const h2TranslateValue = -(scrollValue * 0.5);

    seth1Translate(h1TranslateValue);
    seth2Translate(h2TranslateValue);
    setPhotoOpacityValue(scrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollValue]);

  const changeOnScroll = {
    right: {
      transform: `translateX(${h1Translate}px)`,
      opacity: `${photoOpacityValue}`,
    },
    left: {
      transform: `translateX(${h2Translate}px)`,
      opacity: `${photoOpacityValue}`,
    },
    opacity: {
      opacity: `${photoOpacityValue}`,
    },
  };

  return (
    <>
    <NavBar/>
    <div className={styles.home} id="home">
      <main>
        <div style={isDesktop ? changeOnScroll.opacity : {}}></div>
      </main>
      <aside>
        <h1 style={isDesktop ? changeOnScroll.right : {}}>I'm Krystian Sporysz</h1>
        <h2 style={isDesktop ? changeOnScroll.left : {}}>Full-Stack Developer </h2>
        <h2 style={isDesktop ? changeOnScroll.right : {}}>based in Poland.</h2>
        <p style={isDesktop ? changeOnScroll.left : {}}>
          I'm the tech guru you need in your corner when you're ready to take
          your online game to the next level. With my coding superpowers and
          fearless problem-solving skills, there's no web application or website
          that I can't conquer, I'm your guy!
        </p>
      </aside>
      <div className={styles.background}></div>
    </div>
    </>
  );
};

export default Header;
