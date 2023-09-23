import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/action";

const ThemeSwitcher = (props) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`app-content ${theme}-theme`}>
      <div className="toggle-wrapper">
        <button onClick={handleToggleTheme}>
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </button>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default ThemeSwitcher;
