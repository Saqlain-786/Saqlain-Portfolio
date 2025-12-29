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
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 10, md: 0 },
        bgcolor: "background.default",
        marginTop: 7,
      }}
    >
      <ParticlesBackground />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
            alignItems: "center",
            gap: { xs: 6, md: 10 },
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
                mb: 3,
                fontWeight: 600,
                px: 1.5,
                fontSize: "0.9rem",
                bgcolor: alpha(theme.palette.primary.main, 0.15),
                color: "primary.main",
                borderRadius: 2,
              }}
            /> */}

            <Typography
              sx={{
                fontSize: { xs: "2.6rem", sm: "3.4rem", md: "3rem" },
                fontWeight: 900,
                lineHeight: 1.1,
                mb: 2,
                color: "text.primary",
              }}
            >
              Mohammad Saqlain
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.4rem", md: "2rem" },
                fontWeight: 700,
                color: "primary.main",
                mb: 3,
              }}
            >
              Full Stack Developer
            </Typography>

            <Typography
              sx={{
                fontSize: "1.1rem",
                color: "text.secondary",
                maxWidth: 600,
                lineHeight: 1.8,
                mb: 5,
              }}
            >
              Detail-oriented MERN Stack Developer with 2+ years of experience
              building scalable, high-performance web applications. Currently
              working at Burak Information Technology and pursuing BA from
              Mohanlal Sukhadia University.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                href="#projects"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 4,
                  py: 1.8,
                  borderRadius: 3,
                  fontWeight: 700,
                  fontSize: "1rem",
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
                  px: 4,
                  py: 1.8,
                  borderRadius: 3,
                  fontWeight: 700,
                  fontSize: "1rem",
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
                }}
              >
                Download Resume
              </Button>
            </Stack>

            {/* STATS */}
            <Stack direction="row" spacing={4} mt={7} flexWrap="wrap">
              {[
                { value: "2+", label: "Years Experience" },
                { value: "5+", label: "Live Projects" },
                { value: "BA", label: "Currently Pursuing" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor: alpha(theme.palette.primary.main, 0.05),
                      border: `1px solid ${alpha(
                        theme.palette.primary.main,
                        0.1
                      )}`,
                    }}
                  >
                    <Typography
                      variant="h4"
                      fontWeight={800}
                      color="primary.main"
                    >
                      {stat.value}
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Stack>
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
                p: 4,
                textAlign: "center",
                boxShadow: `0 20px 60px ${alpha(
                  theme.palette.primary.main,
                  0.15
                )}`,
              }}
            >
              {/* Smaller Profile Picture */}
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  mx: "auto",
                  mb: 3,
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
                  sizes="(max-width: 768px) 100px, 100px"
                />
              </Box>

              <Typography
                variant="h6"
                fontWeight={800}
                mb={3}
                color="text.primary"
              >
                Contact Information
              </Typography>

              <Stack spacing={2}>
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
                      alignItems: "center",
                      gap: 1.5,
                      justifyContent: "flex-start",
                      pl: 2,
                    }}
                  >
                    <Box sx={{ color: "primary.main", minWidth: 24 }}>
                      {item.icon}
                    </Box>
                    <Typography
                      fontSize="0.95rem"
                      textAlign="left"
                      color="text.primary"
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              {/* Social Links - Fixed Visibility */}
              <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
                <Button
                  href="https://github.com/Saqlain-786"
                  target="_blank"
                  variant="contained"
                  startIcon={<GitHubIcon />}
                  sx={{
                    borderRadius: 2,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    px: 3,
                    py: 1,
                    bgcolor: "#333",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#000",
                      transform: "translateY(-2px)",
                    },
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
                    fontSize: "0.9rem",
                    px: 3,
                    py: 1,
                    bgcolor: "#0077B5",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#005582",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  LinkedIn
                </Button>
              </Stack>

              {/* Icon Buttons for Social Links */}
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                mt={3}
              ></Stack>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
