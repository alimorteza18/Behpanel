import { createTheme } from "@mui/material/styles";

//NOTE Create Custom Theme
export const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    secondary: {
      main: "#DC143C",
    },
    black: {
      main: "rgb(44 , 48 , 52)",
    }
  },
  typography: {
    fontFamily: "vazir, roboto",
  },
  
});
