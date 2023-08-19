import React from "react";
import classNames from "classnames/bind";
import styles from "./Popper.scss";
const cx = classNames.bind(styles);

const Wrapper = ({ children }) => {
  return <div className={cx("Popper")}>{children}</div>;
};

export default Wrapper;
