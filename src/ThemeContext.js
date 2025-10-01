// src/ThemeContext.js
import { createContext, useContext, useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

// define multiple themes
const themes = {
  light: createTheme({
    palette: {
      mode: "light",
      primary: { main: "#1976d2" },
      background: { default: "#f5f5f5" },
    },
  }),
  dark: createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#90caf9" },
      background: { default: "#121212" },
    },
  }),
  corporate: createTheme({
    palette: {
      mode: "light",
      primary: { main: "#0d47a1" },
      secondary: { main: "#546e7a" },
      background: { default: "#fafafa" },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
  }),
  fun: createTheme({
    palette: {
      mode: "light",
      primary: { main: "#ff4081" },
      secondary: { main: "#7c4dff" },
      background: { default: "#fff3e0" },
    },
    typography: {
      fontFamily: "Comic Sans MS, cursive, sans-serif",
      h1: {
        fontSize: "3rem",
        "@media (max-width:600px)": { fontSize: "2rem" },
      },
      h2: {
        fontSize: "2.5rem",
        "@media (max-width:600px)": { fontSize: "1.75rem" },
      },
      h3: {
        fontSize: "2rem",
        "@media (max-width:600px)": { fontSize: "1.5rem" },
      },
      h4: {
        fontSize: "1.75rem",
        "@media (max-width:600px)": { fontSize: "1.25rem" },
      },
      h5: {
        fontSize: "1.5rem",
        "@media (max-width:600px)": { fontSize: "1rem" },
      },
      h6: {
        fontSize: "1.25rem",
        "@media (max-width:600px)": { fontSize: "0.875rem" },
      },
      body1: {
        fontSize: "1rem",
        "@media (max-width:600px)": { fontSize: "0.875rem" },
      },
      body2: {
        fontSize: "0.875rem",
        "@media (max-width:600px)": { fontSize: "0.75rem" },
      },
    },
  }),
};
export function ThemeContextProvider({ children }) {
  const [themeName, setThemeName] = useState("light");
  const theme = useMemo(() => themes[themeName] || themes.light, [themeName]);
  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}