import React from "react";
import styles from './MyJourney.module.css'
import {useInView} from 'react-intersection-observer'

const MyJourney = () => {
const {ref: infoRef, inView:infoIsVisible} = useInView()

const infoVisibility = infoIsVisible ? styles.show : ''


  return (
    <div id="myjourney" className={styles.journey}>
      <article>
        <title>My Journey</title>
        <h2>How IT all started!</h2>
      </article>
      <div ref={infoRef} className={styles.steps}>
        <div className={`${styles.stepOne} ${infoVisibility}`}>
          <h3>01</h3>
          <h4>
            <span>School, </span>
            IT technician degree</h4>
          <p>
            Learned different programming languages as JavaScript, PHP,
            Python.
          </p>
        </div>
        <div className={`${styles.stepTwo} ${infoVisibility}`}>
          <h3>02</h3>
          <h4><span>Personal Trainer</span>, IT break</h4>
          <p>
            Personal Trainer certification, started working on local gym,
            took a break from IT.
          </p>
        </div>
        <div className={`${styles.stepThree} ${infoVisibility}`}>
          <h3>03</h3>
          <h4><span>Back</span> to the roots!</h4>
          <p>
            Started grinding on programming, learned React, TypeScript, Advanced
            JavaScript
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyJourney;
