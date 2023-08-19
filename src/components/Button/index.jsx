import React from "react";
import styles from "./Button.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
const Button = ({
  primary = false,
  outline = false,
  upload = false,
  to,
  href,
  children,
  ...propsType
}) => {
  let Comp = "button";
  const props = {
    onclick,
    ...propsType,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  const classes = cx("wrapper-btn", { primary, outline, upload });
  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
};

export default Button;
