import React from "react";
import style from "./Sidebar.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
const Sidebar = () => {
  return (
    <aside className={cx("sidebar")}>
      <div className={cx("sidebar-inner")}>
        <nav>SideBar</nav>
      </div>
    </aside>
  );
};

export default Sidebar;
