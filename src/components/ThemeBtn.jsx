import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { lightTheme, darkTheme } from "../store/themeSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function ThemeBtn() {
  const themeMode = useSelector((state) => state.theme.themeMode);
  const dispatch = useDispatch();

  const toggle = () => {
    themeMode === "dark" ? dispatch(lightTheme()) : dispatch(darkTheme());
  };

  const knobLeft = themeMode === "dark" ? "calc(100% - 36px)" : "4px";

  return (
    <button
      onClick={toggle}
      aria-pressed={themeMode === "dark"}
      className="relative flex items-center rounded-full p-1 w-22 h-10 transition-colors duration-300"
      style={{
        backgroundColor: themeMode === "dark" ? "rgb(55 65 81)" : "rgb(229 231 235)",
      }}
    >
      <div
        className={`absolute inset-0 z-0 flex items-center pointer-events-none
        ${themeMode === "dark" ? "justify-start pl-3" : "justify-end pr-3"}`}
      >
        <span
          className="text-sm font-medium"
          style={{ color: themeMode === "dark" ? "#fff" : "#111827" }}
        >
          {themeMode === "dark" ? "Dark " : "Light"}
        </span>
      </div>

      <span
        className="absolute top-1 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow"
        style={{
          left: knobLeft,
          backgroundColor: themeMode === "dark" ? "#0f172a" : "#ffffff",
          transition: "left 220ms cubic-bezier(.2,.9,.3,1), background-color 220ms",
        }}
      >
        <FontAwesomeIcon
          icon={themeMode === "dark" ? faMoon : faSun}
          style={{ color: themeMode === "dark" ? "#FFD86B" : "green" }}
        />
      </span>
    </button>
  );
}
