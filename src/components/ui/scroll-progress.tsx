// "use client";

// import { Box, LinearProgress } from "@mui/material";
// import { useEffect, useState } from "react";

// export default function ScrollProgress() {
//   const [scroll, setScroll] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//       const currentPosition = window.scrollY;
      
//       if (totalHeight > 0) {
//         setScroll((currentPosition / totalHeight) * 100);
//       } else {
//         setScroll(0);
//       }
//     };

//     // Add event listener with debouncing
//     let ticking = false;
//     const scrollHandler = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           handleScroll();
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener("scroll", scrollHandler, { passive: true });
//     window.addEventListener("resize", scrollHandler, { passive: true });
    
//     // Initial call
//     scrollHandler();

//     return () => {
//       window.removeEventListener("scroll", scrollHandler);
//       window.removeEventListener("resize", scrollHandler);
//     };
//   }, []);

//   // Don't render until hydration is complete
//   if (typeof window === "undefined") {
//     return null;
//   }

//   return (
//     <Box
//       sx={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         height: 4,
//         zIndex: 9999,
//         pointerEvents: "none",
//       }}
//     >
//       <LinearProgress
//         variant="determinate"
//         value={scroll}
//         sx={{
//           height: "100%",
//           backgroundColor: "transparent",
//           "& .MuiLinearProgress-bar": {
//             background: "linear-gradient(90deg, #6366F1, #22D3EE)",
//             transition: "transform 0.1s ease",
//           },
//         }}
//       />
//     </Box>
//   );
// }