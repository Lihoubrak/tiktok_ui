import React, { useEffect, useRef, useState } from "react";
import TippyHeadless from "@tippyjs/react/headless";
import {
  faCircleXmark,
  faSpinner,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Wrapper as PopperWrapper } from "../Popper";
import styles from "./Search.scss";
import classNames from "classnames/bind";
import { SearchIcon } from "../../icons";
import AccountItem from "../AccountItem";
import useDebounce from "../../hooks/useDebounce";
import * as searchService from "../../ApiService/searchService";
const cx = classNames.bind(styles);

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchValues, setSearchValues] = useState("");
  const [showResult, setshowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const debounced = useDebounce(searchValues, 500);
  const inputRef = useRef(null);
  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResults([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchService.search(debounced);
      setSearchResults(result);
      setLoading(false);
    };

    fetchApi();
  }, [debounced]);

  const handleHideSearchResults = () => {
    setshowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValues(searchValue);
    }
  };
  return (
    <TippyHeadless
      render={(attrs) => (
        <div className="search-results" tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <div className={cx("search-results-title")}>Accounts</div>
            {searchResults.map((item) => {
              return <AccountItem key={item.id} datas={item} />;
            })}
          </PopperWrapper>
        </div>
      )}
      visible={searchResults.length > 0 && showResult}
      interactive
      onClickOutside={handleHideSearchResults}
      appendTo={() => document.body}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValues}
          className={cx("search-input")}
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          onFocus={() => setshowResult(true)}
        />
        {!!searchValues && !loading && (
          <button
            className={cx("clear")}
            onClick={() => {
              setSearchValues("");
              inputRef.current.focus();
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && (
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
        )}
        <button className={cx("button-search")}>
          <SearchIcon />
        </button>
      </div>
    </TippyHeadless>
  );
};

export default Search;
