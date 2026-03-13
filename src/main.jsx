import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { CartProvider } from "./features/context/CartContext";
import { FavoritesProvider } from "./features/context/FavoritesContext";


const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1e1e2f" },
    secondary: { main: "#1976d2" }
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <CartProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </CartProvider>

  </ThemeProvider>
);