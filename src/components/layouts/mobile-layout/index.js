import React from "react";
import style from "./mobile-layout.module.css";

const MobileLayout = ({ children }) => {
  return <div className={style.page}>{children}</div>;
};

export default MobileLayout;
