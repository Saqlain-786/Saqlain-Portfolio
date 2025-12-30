"use client";

import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  alpha,
 
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import Image from "next/image";
import ParticlesBackground from "./ui/particles-background";

export default function Hero() {
  const theme = useTheme();

  return (
    <Box
      id="hero"
      sx={{
        minHeight: { xs: "auto", sm: "90vh", md: "100vh" },
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 8, sm: 10, md: 0 },
        pb: { xs: 6, sm: 8, md: 0 },
        bgcolor: "background.default",
        marginTop: { xs: 4, sm: 5, md: 7 },
      }}
    >
      <ParticlesBackground />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
            alignItems: "center",
            gap: { xs: 6, sm: 8, md: 10, lg: 12 },
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <Chip
              label="🚀 MERN Stack Developer"
              sx={{
                mb: { xs: 2, sm: 3 },
                fontWeight: 600,
                px: { xs: 1, sm: 1.5 },
                py: { xs: 0.5, sm: 0.75 },
                fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                bgcolor: alpha(theme.palette.primary.main, 0.15),
                color: "primary.main",
                borderRadius: 2,
                display: { xs: "none", sm: "inline-flex" },
              }}
            /> */}

            <Typography
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "2.8rem",
                  lg: "3.2rem",
                  xl: "3.5rem",
                },
                fontWeight: 800,
                lineHeight: { xs: 1.2, sm: 1.1 },
                mb: { xs: 1, sm: 2 },
                color: "text.primary",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Mohammad Saqlain
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "1.2rem",
                  sm: "1.5rem",
                  md: "1.8rem",
                  lg: "2rem",
                },
                fontWeight: 700,
                color: "primary.main",
                mb: { xs: 2, sm: 3 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Full Stack Developer
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                color: "text.secondary",
                maxWidth: 600,
                lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 },
                mb: { xs: 3, sm: 4, md: 5 },
                textAlign: { xs: "center", md: "left" },
                px: { xs: 1, sm: 0 },
              }}
            >
              Detail-oriented MERN Stack Developer with 2+ years of experience
              building scalable, high-performance web applications. Currently
              working at Burak Information Technology and pursuing BA from
              Mohanlal Sukhadia University.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: { xs: "stretch", sm: "center" },
                mb: { xs: 4, sm: 5 },
              }}
            >
              <Button
                variant="contained"
                size="large"
                href="#projects"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: { xs: 2, sm: 3, md: 4 },
                  py: { xs: 1.2, sm: 1.5, md: 1.8 },
                  borderRadius: 3,
                  fontWeight: 700,
                  fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                  bgcolor: "primary.main",
                  color: "white",
                  boxShadow: `0 4px 20px ${alpha(
                    theme.palette.primary.main,
                    0.4
                  )}`,
                  "&:hover": {
                    bgcolor: "primary.dark",
                    boxShadow: `0 6px 30px ${alpha(
                      theme.palette.primary.main,
                      0.5
                    )}`,
                    transform: "translateY(-2px)",
                  },
                  minWidth: { xs: "100%", sm: "auto" },
                }}
              >
                View Projects
              </Button>

              <Button
                variant="outlined"
                size="large"
                href="/saqlain_resume.pdf"
                download
                startIcon={<DownloadIcon />}
                sx={{
                  px: { xs: 2, sm: 3, md: 4 },
                  py: { xs: 1.2, sm: 1.5, md: 1.8 },
                  borderRadius: 3,
                  fontWeight: 700,
                  fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                  borderWidth: 2,
                  borderColor: "primary.main",
                  color: "primary.main",
                  bgcolor: alpha(theme.palette.primary.main, 0.05),
                  "&:hover": {
                    borderWidth: 2,
                    borderColor: "primary.dark",
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    transform: "translateY(-2px)",
                  },
                  minWidth: { xs: "100%", sm: "auto" },
                }}
              >
                Download Resume
              </Button>
            </Stack>

            {/* STATS */}
            <Grid
              container
              direction="row"
              spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
              mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}
              flexWrap="wrap"
              justifyContent={{ xs: "space-between", sm: "flex-start" }}
              sx={{
                "& > *": {
                  flex: { xs: "1 1 30%", sm: "0 1 auto" },
                  maxWidth: { xs: "31%", sm: "none" },
                  minWidth: { xs: "90px", sm: "110px", md: "120px" },
                },
              }}
            >
              {[
                { value: "2+", label: "Years Experience" },
                { value: "5+", label: "Live Projects" },
                { value: "BA", label: "Currently Pursuing" },
              ].map((stat, i) => (
                <Grid size={4} key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <Box
                      sx={{
                        p: { xs: 1, sm: 1.5, md: 2 },
                        textAlign: "center",
                        borderRadius: 2,
                        bgcolor: alpha(theme.palette.primary.main, 0.05),
                        border: `1px solid ${alpha(
                          theme.palette.primary.main,
                          0.1
                        )}`,
                        minHeight: { xs: "70px", sm: "80px", md: "90px" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontSize: {
                            xs: "1.4rem",
                            sm: "1.6rem",
                            md: "1.875rem",
                            lg: "2.125rem",
                          },
                          fontWeight: 800,
                          lineHeight: 1,
                          mb: { xs: 0.5, sm: 0.75 },
                        }}
                        color="primary.main"
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: {
                            xs: "0.65rem",
                            sm: "0.75rem",
                            md: "0.85rem",
                          },
                          fontWeight: 500,
                          lineHeight: 1.2,
                          textAlign: "center",
                        }}
                        color="text.secondary"
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                backdropFilter: "blur(16px)",
                bgcolor: alpha(theme.palette.background.paper, 0.95),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                borderRadius: 4,
                p: { xs: 2.5, sm: 3, md: 4 },
                textAlign: "center",
                boxShadow: `0 20px 60px ${alpha(
                  theme.palette.primary.main,
                  0.15
                )}`,
                mx: { xs: "auto", md: 0 },
                maxWidth: { xs: "320px", sm: "380px", md: "100%" },
              }}
            >
              {/* Responsive Profile Picture */}
              <Box
                sx={{
                  width: { xs: 90, sm: 100, md: 110, lg: 120 },
                  height: { xs: 90, sm: 100, md: 110, lg: 120 },
                  mx: "auto",
                  mb: { xs: 2.5, sm: 3, md: 3.5 },
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: `3px solid ${theme.palette.primary.main}`,
                  position: "relative",
                  boxShadow: `0 8px 32px ${alpha(
                    theme.palette.primary.main,
                    0.3
                  )}`,
                }}
              >
                <Image
                  src="/saqlain_profile.jpeg"
                  alt="Saqlain"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  sizes="(max-width: 600px) 90px, (max-width: 900px) 100px, 110px"
                />
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                  fontWeight: 800,
                  mb: { xs: 2.5, sm: 3, md: 3.5 },
                  color: "text.primary",
                }}
              >
                Contact Information
              </Typography>

              <Stack spacing={{ xs: 1.5, sm: 2 }}>
                {[
                  { icon: <LocationOnIcon />, text: "Udaipur, Rajasthan" },
                  { icon: <AddIcCallIcon />, text: "+91 8005769678" },
                  { icon: <MailIcon />, text: "ksaqlan429@gmail.com" },
                  {
                    icon: <BusinessCenterIcon />,
                    text: "Burak Information Technology",
                  },
                ].map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: { xs: 1, sm: 1.25, md: 1.5 },
                      justifyContent: "flex-start",
                      pl: { xs: 1, sm: 1.5, md: 2 },
                      pr: { xs: 1, sm: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        color: "primary.main",
                        minWidth: { xs: "20px", sm: "24px", md: "28px" },
                        mt: 0.25,
                        display: "flex",
                        alignItems: "center",
                        "& svg": {
                          fontSize: {
                            xs: "0.9rem",
                            sm: "1rem",
                            md: "1.1rem",
                            lg: "1.25rem",
                          },
                        },
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "0.8rem",
                          sm: "0.9rem",
                          md: "1rem",
                          lg: "1.05rem",
                        },
                        textAlign: "left",
                        color: "text.primary",
                        lineHeight: 1.4,
                        wordBreak: "break-word",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              {/* Social Links */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1.5, sm: 2 }}
                justifyContent="center"
                mt={{ xs: 3, sm: 3.5, md: 4 }}
                alignItems="center"
              >
                <Button
                  href="https://github.com/Saqlain-786"
                  target="_blank"
                  variant="contained"
                  startIcon={<GitHubIcon />}
                  sx={{
                    borderRadius: 2,
                    fontWeight: 600,
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.85rem",
                      md: "0.9rem",
                      lg: "0.95rem",
                    },
                    px: { xs: 2, sm: 2.5, md: 3, lg: 3.5 },
                    py: { xs: 0.75, sm: 0.9, md: 1, lg: 1.1 },
                    bgcolor: "#333",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#000",
                      transform: "translateY(-2px)",
                    },
                    minWidth: { xs: "100%", sm: "auto" },
                  }}
                >
                  GitHub
                </Button>
                <Button
                  href="https://www.linkedin.com/in/saqlain-khan-236856320/"
                  target="_blank"
                  variant="contained"
                  startIcon={<LinkedInIcon />}
                  sx={{
                    borderRadius: 2,
                    fontWeight: 600,
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.85rem",
                      md: "0.9rem",
                      lg: "0.95rem",
                    },
                    px: { xs: 2, sm: 2.5, md: 3, lg: 3.5 },
                    py: { xs: 0.75, sm: 0.9, md: 1, lg: 1.1 },
                    bgcolor: "#0077B5",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#005582",
                      transform: "translateY(-2px)",
                    },
                    minWidth: { xs: "100%", sm: "auto" },
                  }}
                >
                  LinkedIn
                </Button>
              </Stack>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
