import React from "react";

import styles from "./BackgroundBar.module.css";

const BackgroundBar = ({ children }) => {
  return <div className={styles.backgroundBar}>{children}</div>;
};

export default BackgroundBar;
