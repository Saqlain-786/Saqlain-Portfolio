"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1A1A1A", // Sophisticated Matte Black
      light: "#404040",
      dark: "#000000",
    },
    secondary: {
      main: "#B99362", // Classy Bronze / Champagne Gold
      light: "#D4B996",
      dark: "#8C6A42",
    },
    background: {
      default: "#FDFDFD", // Clean Pure White
      paper: "rgba(255, 255, 255, 0.7)", 
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#666666",
    },
    divider: "rgba(0, 0, 0, 0.05)",
  },
  typography: {
    // Serif font heading ke liye classy lagta hai
    fontFamily: `'Inter', 'Playfair Display', serif`,
    h1: {
      fontWeight: 700,
      fontSize: "4rem",
      letterSpacing: "-0.04em",
      fontFamily: "'Playfair Display', serif", // Classy Touch
    },
    h2: {
      fontWeight: 600,
      fontFamily: "'Playfair Display', serif",
    },
    button: {
      textTransform: "uppercase", // Minimalist look
      fontWeight: 500,
      letterSpacing: "0.1em",
      fontSize: "0.8rem",
    },
  },
  shape: {
    borderRadius: 4, // Sharp corners zyada premium aur professional lagte hain
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#FDFDFD",
          backgroundImage: "linear-gradient(180deg, #FDFDFD 0%, #F5F5F5 100%)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Flat design for high-end feel
          padding: "12px 32px",
          border: "1px solid #1A1A1A",
        },
        contained: {
          backgroundColor: "#1A1A1A",
          color: "#FFF",
          "&:hover": {
            backgroundColor: "#B99362",
            border: "1px solid #B99362",
            boxShadow: "none",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: "1px solid #EEE",
          borderRadius: 0,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            borderColor: "#B99362",
            transform: "translateY(-4px)",
          },
        },
      },
    },
  },
});

export default theme;