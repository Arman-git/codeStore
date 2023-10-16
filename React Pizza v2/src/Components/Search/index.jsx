import React from "react";
import debounce from "lodash.debounce";

import styles from "./Search.module.scss";
// import { SearchContext } from "../../App";
import { setSearchValue } from "../../Redux/slices/filterSlice";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  // const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current.focus();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 150),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground="new 0 0 50 50"
        height="50px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 50 50"
        width="50px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="none" height="50" width="50" />
        <circle
          cx="21"
          cy="20"
          fill="none"
          r="16"
          stroke="#000000"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          stroke="#000000"
          strokeMiterlimit="10"
          strokeWidth="4"
          x1="32.229"
          x2="45.5"
          y1="32.229"
          y2="45.5"
        />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пищи..."
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          id="Layer_1"
          version="1.1"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g id="Icon-Close-O" transform="translate(378.000000, 278.000000)">
              <path
                className="st0"
                d="M-345.9-222.1c-13.2,0-23.9-10.7-23.9-23.9c0-13.2,10.7-23.9,23.9-23.9     c13.2,0,23.9,10.7,23.9,23.9C-322-232.9-332.7-222.1-345.9-222.1L-345.9-222.1z M-345.9-267.4c-11.7,0-21.3,9.6-21.3,21.3     c0,11.7,9.6,21.3,21.3,21.3s21.3-9.6,21.3-21.3C-324.6-257.8-334.2-267.4-345.9-267.4L-345.9-267.4z"
                id="Fill-52"
              />
              <polyline
                className="st0"
                id="Fill-53"
                points="-356.3,-233.8 -358.2,-235.7 -335.6,-258.3 -333.7,-256.4 -356.3,-233.8    "
              />
              <polyline
                className="st0"
                id="Fill-54"
                points="-335.6,-233.8 -358.2,-256.4 -356.3,-258.3 -333.7,-235.7 -335.6,-233.8    "
              />
            </g>
          </g>
        </svg>
      )}
    </div>
  );
};
export default Search;
