import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#24282f",
    },
    secondary: {
      main: "#00b349",
    },
  },
  typography: {
    fontFamily: ["'Raleway'", "sans-serif"].join(","),
    button: {
      textTransform: "capitalize",
      fontSize: "12px",
    },
  },
});

export default theme;
