import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    themeMode: "light",
  },
  reducers: {
    lightTheme: (state) => {
      state.themeMode = "light";
    },
    darkTheme: (state) => {
      state.themeMode = "dark";
    },
    toggleTheme: (state) => {
      state.themeMode = state.themeMode === "dark" ? "light" : "dark";
    },
  },
});

export const { lightTheme, darkTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
