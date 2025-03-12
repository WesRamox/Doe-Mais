import { createRoot } from "react-dom/client";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"; // Importar o QueryClient e QueryClientProvider
import "./ui/styles/index.css";
import App from "./App.tsx";

import { createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { AuthProvider } from "./contexts/AuthContext.tsx";

// Criação do tema
const theme = createTheme({
  palette: {
    primary: {
      main: "#f84f52",
    },
    secondary: {
      main: "#fff",
      contrastText: "#f84f52",
      dark: "#f8f8f8",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    button: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "1rem",
      fontWeight: 600,
      textTransform: "none",
    },
  },
});

// Criação do QueryClient
const queryClient = new QueryClient();

createRoot(
  document.getElementById("root")!
).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
          <App />
      </AuthProvider>
    </QueryClientProvider>
  </ThemeProvider>
);
