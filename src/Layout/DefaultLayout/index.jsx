import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import style from "./DefaultLayout.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
const DefultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>
          <div className={cx("content-inner")}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DefultLayout;
