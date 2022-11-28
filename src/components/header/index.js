import React from "react";
import styles from "./header.module.css";
import { BackIcon } from "../../Assets/icons";

const Header = ({ title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <BackIcon />
      </div>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Header;
