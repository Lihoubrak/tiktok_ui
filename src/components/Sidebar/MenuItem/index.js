import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuItem.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const MenuItem = ({ title, to, icon, activeIcon }) => {
  return (
    <NavLink
      to={to}
      className={(nav) => cx("list-menu", { active: nav.isActive })}
    >
      <div className={cx("icon")}>{icon}</div>
      <div className={cx("icon-active")}>{activeIcon}</div>
      <span className={cx("title")}>{title}</span>
    </NavLink>
  );
};

export default MenuItem;
