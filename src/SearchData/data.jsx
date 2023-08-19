import React from "react";
import style from "./Search.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
const SearchItem = () => {
  return (
    <div className={cx("Search-Item")}>
      <ul className="list-result">
        <div className={cx("search-results-title")}>You may like</div>
        <li className={cx("search-results-content")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            class="tiktok-f81823 e1ysk6kp17"
          >
            <path
              fill="#FE2C55"
              fill-rule="evenodd"
              d="M8.333.507a.437.437 0 0 0-.666 0L1.105 8.209a.437.437 0 0 0 .333.721h3.529v5.86c0 .24.196.437.437.437H10.6a.437.437 0 0 0 .437-.438V8.93h3.526a.437.437 0 0 0 .333-.72L8.333.506Z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <h4 className={cx("text-results")}>
            Phản Ứng Của Jisoo Khi Nghe Lửa Hận Thù{" "}
          </h4>
        </li>
        <li className={cx("search-results-content")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            class="tiktok-f81823 e1ysk6kp16"
          >
            <path
              fill="#FE2C55"
              fill-rule="evenodd"
              d="M13.942 10.338c.196-1.164-.017-3.798-2.031-5.434-.165-.134-.408-.073-.515.11-.457.785-1.2 1.741-2.11 2.08.556-1.91.833-5.2-2.108-6.871a.327.327 0 0 0-.486.26c-.128 1.212-.275 2.216-2.227 4.18C3.3 6.093 1.7 8.096 2.05 10.337 2.44 12.853 4.647 15 8.039 15c3.393 0 5.49-2.201 5.903-4.662Z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <h4 className={cx("text-results")}>
            Phản Ứng Của Jisoo Khi Nghe Lửa Hận Thù{" "}
          </h4>
        </li>
        <li className={cx("search-results-content")}>
          <div className={cx("clicle-conntainer")}>
            <div className={cx("clicle")}></div>
          </div>
          <h4 className={cx("text-results")}>
            Phản Ứng Của Jisoo Khi Nghe Lửa Hận Thù{" "}
          </h4>
        </li>
        <li className={cx("search-results-content")}>
          <div className={cx("clicle-conntainer")}>
            <div className={cx("clicle")}></div>
          </div>
          <h4 className={cx("text-results")}>
            Phản Ứng Của Jisoo Khi Nghe Lửa Hận Thù{" "}
          </h4>
        </li>
        <li className={cx("search-results-content")}>
          <div className={cx("clicle-conntainer")}>
            <div className={cx("clicle")}></div>
          </div>
          <h4 className={cx("text-results")}>
            Phản Ứng Của Jisoo Khi Nghe Lửa Hận Thù{" "}
          </h4>
        </li>
      </ul>
    </div>
  );
};

export default SearchItem;
