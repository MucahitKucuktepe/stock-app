import { createTheme } from "@mui/material";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { blue, blueGrey, grey, red } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: red["900"],
      },
      secondary: {
        main: blue["900"],
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
