import React from "react";
import style from "./button.module.css";

const Button = (props) => {
  const { value, variant, Icon, fullWidth } = props;
  return (
    <div
      className={style.button}
      data-variant={variant}
      data-fullWidth={fullWidth ? "true" : "false"}
    >
      {Icon && (
        <div className={style.icon}>
          <Icon />
        </div>
      )}
      {value}
    </div>
  );
};

export default Button;
