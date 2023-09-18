import React,  { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
        </Suspense>
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
