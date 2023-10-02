import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import App from "./App";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f50b5',
    },
    secondary: {
      main: '#f44336',
    },
  },
});



const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
