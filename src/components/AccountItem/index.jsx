import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Account.scss";

const cx = classNames.bind(styles);

function AccountItem({ datas }) {
  return (
    <Link to={`/@${datas.nickname}`} className={cx("wrappers")}>
      <img className={cx("avatar")} src={datas.avatar} alt={datas.full_name} />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>{datas.full_name}</span>
          {datas.tick && (
            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
          )}
        </h4>
        <span className={cx("username")}>{datas.nickname}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
