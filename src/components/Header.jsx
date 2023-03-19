import React from "react";
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.head} id="header">
      <main>
        <div>
          <img src="" alt="put your image here " />
        </div>
      </main>
      <aside>
        <h1>I'm Krystian Sporysz</h1>
        <h2>Softwere Developer</h2>
        <h2>Based in Poland</h2>
      </aside>
    </div>
  );
};

export default Header;
