import React, { useState } from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Menu.scss";
const cx = classNames.bind(styles);

const MenuItem = ({ Menu, currentMenu, setCurrentMenu, currentUser }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [subMenu, setSubMenu] = useState(currentMenu);
  const [TitleMode, setTitileMode] = useState(false);

  const handleItemClick = (item) => {
    if (item.children) {
      setSubMenu(item.children.data);
      setTitileMode(true);
    }
  };

  const handleBackClick = () => {
    setSubMenu(Menu);
    setTitileMode(false);
  };

  return (
    <ul className={cx("list-item")}>
      {TitleMode && (
        <div className={cx("header-language")}>
          <div className={cx("header-icon")} onClick={handleBackClick}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <p className={cx("hearder-title")}>Language</p>
        </div>
      )}
      {subMenu.map((item, index) => (
        <li
          key={index}
          className={cx("item")}
          onClick={() => handleItemClick(item)}
        >
          {TitleMode ? null : (
            <span className={cx("item-icon")}>{item.icon}</span>
          )}
          {item.darkMode ? (
            <div>
              {item.title}
              <div
                className={cx(`dark-mode ${currentUser ? "user" : ""}`, {
                  active: darkMode,
                })}
                onClick={() => setDarkMode(!darkMode)}
              ></div>
            </div>
          ) : (
            <div className={cx("title")}>{item.title}</div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MenuItem;
