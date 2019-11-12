import { createMuiTheme } from "@material-ui/core/styles";

const palette = {
  primary: {
    light: "#E6EEF8",
    main: "#0251B7",
    dark: "#001025"
  },
  secondary: {
    light: "#72BBD8",
    main: "#F1F8FB",
    dark: "#17252B"
  },
  error: {
    main: "#FF350C"
  }
};

const isDark = theme => theme.palette.type === "dark";

const lightTheme = createMuiTheme({
  palette: {
    ...palette,
    type: "light"
  }
});

const darkTheme = createMuiTheme({
  palette: {
    ...palette,
    type: "dark"
  }
});

export { isDark, lightTheme, darkTheme };
