import React from "react";
import styles from './MyJourney.module.css'

const MyJourney = () => {
  return (
    <div id="myjourney" className={styles.journey}>
      <article>
        <title>My Journey</title>
        <h2>How IT all started!</h2>
      </article>
      <div className={styles.steps}>
        <div className="step1">
          <h3>01</h3>
          <h4>
            <span>School, </span>
            IT technician degree</h4>
          <p>
            Learned different programming languages as JavaScript, PHP,
            Python.
          </p>
        </div>
        <div className="step2">
          <h3>02</h3>
          <h4>Personal Trainer, IT break</h4>
          <p>
            Personal Trainer certification, started working on local gym,
            took a break from IT.
          </p>
        </div>
        <div className="step3">
          <h3>03</h3>
          <h4>Back to the roots!</h4>
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
