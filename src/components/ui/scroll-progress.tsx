"use client";

import { Box, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScroll(height > 0 ? (winScroll / height) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <LinearProgress
        variant="determinate"
        value={scroll}
        sx={{
          height: "100%",
          backgroundColor: "transparent",
          "& .MuiLinearProgress-bar": {
            background:
              "linear-gradient(90deg, #6366F1, #22D3EE)",
          },
        }}
      />
    </Box>
  );
}
