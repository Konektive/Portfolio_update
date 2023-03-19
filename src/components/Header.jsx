import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div classname={styles.header} style={{height:'100vh', display: "flex", "align-items":'center'}} id="header">
      <main style={{"flex-basis": "30%"}}>
        <div>
          <img src="" alt="put your image here " />
        </div>
      </main>
      <aside style={{"flex-basis": "70%"}}>
        <h1>I'm Krystian Sporysz</h1>
        <h2>Softwere Developer</h2>
        <h2>Based in Poland</h2>
      </aside>
    </div>
  );
};

export default Header;
