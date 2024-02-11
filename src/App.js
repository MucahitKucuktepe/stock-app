import { createTheme } from "@mui/material";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { blue, blueGrey, grey, red } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: grey["900"],
      },
      secondary: {
        main: blueGrey["900"],
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ToastContainer />
            <AppRouter />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
