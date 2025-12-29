import Footer from "@/layout/footer";
import Header from "@/layout/header";
import theme from "@/theme/theme";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohammad Saqlain | MERN Stack Developer & Software Engineer",
  description:
    "Professional portfolio showcasing MERN stack expertise, enterprise projects, and technical skills",
  keywords:
    "MERN Stack, React, Node.js, MongoDB, Full Stack Developer, Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#6366F1" />
      </head>
      <body style={{ overflowX: "hidden" }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Header />
          <Container
            maxWidth="lg"
            sx={{
              px: { xs: 2, sm: 3, md: 4 },
              overflow: "hidden",
            }}
          >
            {children}
          </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
