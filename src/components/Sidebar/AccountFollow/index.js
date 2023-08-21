import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./AccountFollow.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(styles);
const AccountFollow = ({ datas }) => {
  return (
    <div
      style={{
        borderTop: "1px solid #efefef",
        margin: "8px 0",
        marginLeft: "16px",
      }}
    >
      <Link to={`/@leeminhou20`} className={cx("wrappers")}>
        <img
          className={cx("avatar")}
          src={
            "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1684021646675970.jpeg?x-expires=1692763200&x-signature=IWXq4VQoFj%2BO5RVEp5GI7PLHpTA%3D"
          }
        />
        <div className={cx("info")}>
          <h4 className={cx("name")}>
            <span>LeeMinHou</span>

            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
          </h4>
          <span className={cx("username")}>leeminhou20</span>
        </div>
      </Link>
    </div>
  );
};

export default AccountFollow;
