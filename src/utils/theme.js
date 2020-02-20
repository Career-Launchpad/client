import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const themeKey = "prospect_theme";
const light = "light";
const dark = "dark";

const palette = {
  primary: {
    light: "#E6EEF8",
    main: "#0251B7",
    dark: "#001025",
    hover: '#ECECEC'
  },
  secondary: {
    light: "#F1F8FB",
    main: "#72BBD8",
    dark: "#17252B",
    hover: '#6F6F6F'
  },
  error: {
    main: "#FF350C"
  }
};

const lightTheme = createMuiTheme({
  palette: {
    ...palette,
    type: light
  }
});

const darkTheme = createMuiTheme({
  palette: {
    ...palette,
    type: dark
  }
});

const getCurrentTheme = (storage = localStorage) => {
  return (storage.getItem(themeKey) || light) === light
    ? lightTheme
    : darkTheme;
};

const toggleTheme = (storage = localStorage) => {
  if (storage.getItem(themeKey) === dark) storage.setItem(themeKey, light);
  else storage.setItem(themeKey, dark);
  return getCurrentTheme();
};

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [value, setValue] = useState({ theme: getCurrentTheme() });
  value.toggleTheme = () => setValue({ theme: toggleTheme() });
  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={value.theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

const ThemeConsumer = ThemeContext.Consumer;

export { getCurrentTheme, toggleTheme, ThemeConsumer, ThemeProvider };
