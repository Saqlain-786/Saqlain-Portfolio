"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6366F1",
      light: "#818CF8",
      dark: "#4F46E5",
    },
    secondary: {
      main: "#22D3EE",
      light: "#67E8F9",
      dark: "#0EA5E9",
    },
    background: {
      default: "#0B1020",
      paper: "rgba(17, 24, 39, 0.9)",
    },
    text: {
      primary: "#F8FAFC",
      secondary: "#94A3B8",
      disabled: "#64748B",
    },
    divider: "rgba(255, 255, 255, 0.1)",
  },
  typography: {
    fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
    h1: {
      fontWeight: 900,
      fontSize: "3.5rem",
      letterSpacing: "-0.02em",
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 800,
      fontSize: "3rem",
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.25rem",
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.875rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.25rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "0.95rem",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          overflowX: "hidden",
        },
        "::-webkit-scrollbar": {
          width: 10,
        },
        "::-webkit-scrollbar-track": {
          background: "#0B1020",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#6366F1",
          borderRadius: 5,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(10px)",
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          transition: "all 0.3s ease",
        },
        contained: {
          boxShadow: "0 4px 14px rgba(99, 102, 241, 0.25)",
          "&:hover": {
            boxShadow: "0 6px 20px rgba(99, 102, 241, 0.35)",
            transform: "translateY(-2px)",
          },
        },
        outlined: {
          borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
          },
        },
      },
    },
  },
});

export default theme;