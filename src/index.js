import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // Ensure correct import
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeContextProvider } from "./ThemeContext"; // import your ThemeProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>
);

reportWebVitals();