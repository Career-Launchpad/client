import { createMuiTheme } from "@material-ui/core/styles";

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
    type: "light"
  }
});

const darkTheme = createMuiTheme({
  palette: {
    ...palette,
    type: "dark"
  }
});

export { lightTheme, darkTheme };
