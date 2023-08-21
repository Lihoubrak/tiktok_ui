import React from "react";
import styles from "./Menu.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const Menu = ({ children }) => {
  return <div className={cx("Menu")}>{children}</div>;
};

export default Menu;
