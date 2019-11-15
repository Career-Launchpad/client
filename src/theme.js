import { createMuiTheme } from "@material-ui/core/styles";

const light = "light";
const dark = "dark";

const palette = {
  primary: {
    light: "#E6EEF8",
    main: "#0251B7",
    dark: "#001025"
  },
  secondary: {
    light: "#F1F8FB",
    main: "#72BBD8",
    dark: "#17252B"
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

const themeKey = "career-debut-theme";

const toggleTheme = (storage = localStorage) => {
  if (storage.getItem(themeKey) === dark) storage.setItem(themeKey, light);
  else storage.setItem(themeKey, dark);
};

const getCurrentTheme = (storage = localStorage) => {
  return (storage.getItem(themeKey) || light) === light
    ? lightTheme
    : darkTheme;
};

export { toggleTheme, getCurrentTheme };
