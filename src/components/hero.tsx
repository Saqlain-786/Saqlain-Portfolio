"use client";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import ParticlesBackground from "./ui/particles-background";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MailIcon from "@mui/icons-material/Mail";

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
      }}
    >
      <ParticlesBackground />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
            alignItems: "center",
            gap: { xs: 6, md: 8 },
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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Chip
                label="MERN Stack Developer"
                color="primary"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  px: 1,
                  fontSize: "0.9rem",
                  bgcolor: "rgba(99, 102, 241, 0.1)",
                }}
              />
            </motion.div>

            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  sm: "3.5rem",
                  md: "4rem",
                  lg: "4.5rem",
                },
                fontWeight: 900,
                lineHeight: 1.1,
                mb: 3,
              }}
            >
              Sayed Ubaid Ali
              <Box
                component="span"
                sx={{
                  display: "block",
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  color: "primary.main",
                  mt: 1,
                }}
              >
                Full Stack Developer
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: "1.2rem",
                color: "text.secondary",
                maxWidth: 600,
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              Detail-oriented MERN Stack Developer with 1.9+ years of hands-on
              experience building scalable web applications. Currently working
              at Burak Information Technology while pursuing BCA at Mohanlal
              Sukhadia University.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={5}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  href="#projects"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  View Projects
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  href="/Ubaid_Resume.pdf" // Make sure this file exists in public folder
                  download
                  startIcon={<DownloadIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  Download Resume
                </Button>
              </motion.div>
            </Stack>

            {/* Stats */}
            <Box sx={{ display: "flex", gap: 4, mt: 8, flexWrap: "wrap" }}>
              {[
                { value: "1.9+", label: "Years Experience" },
                { value: "5+", label: "Live Projects" },
                { value: "BCA", label: "Currently Pursuing" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{ fontWeight: 800, color: "primary.main" }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography color="text.secondary">{stat.label}</Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          {/* RIGHT PROFILE CARD - Update this to match resume contact info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Box
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -20,
                  left: -20,
                  right: 20,
                  bottom: 20,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                  borderRadius: 2,
                  zIndex: -1,
                },
              }}
            >
              <Box
                sx={{
                  bgcolor: "background.paper",
                  p: { xs: 3, md: 4 },
                  borderRadius: 2,
                  textAlign: "center",
                  border: "1px solid rgba(99, 102, 241, 0.2)",
                  boxShadow: "0 20px 60px rgba(99, 102, 241, 0.15)",
                }}
              >
                <Avatar
                  src="/profile.jpeg" // Make sure this image exists
                  sx={{
                    width: { xs: 100, md: 120 },
                    height: { xs: 100, md: 120 },
                    mx: "auto",
                    mb: 3,
                    border: "4px solid",
                    borderColor: "primary.main",
                    boxShadow: "0 0 40px rgba(99, 102, 241, 0.3)",
                  }}
                />

                <Typography variant="h5" fontWeight={800} gutterBottom>
                  Contact Info
                </Typography>

                <Stack spacing={2} mt={3}>
                  {[
                    {
                      icon: <LocationOnIcon />,
                      text: "Udaipur, Rajasthan, India",
                    },
                    { icon: <AddIcCallIcon />, text: "+91-7878053525" },
                    { icon: <MailIcon />, text: "ubaid.udr@gmail.com" },
                    {
                      icon: <BusinessCenterIcon />,
                      text: "Burak Information Technology",
                    },
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: 1.5,
                        textAlign: "left",
                      }}
                    >
                      <Box sx={{ fontSize: "1.1rem", minWidth: "24px" }}>
                        {item.icon}
                      </Box>
                      <Typography fontSize="0.9rem">{item.text}</Typography>
                    </Box>
                  ))}
                </Stack>

                {/* Social Links - Use your actual links */}
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  mt={4}
                  pt={3}
                  sx={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="text"
                      size="small"
                      href="https://github.com/Ubaid-ali786"
                      target="_blank"
                      sx={{
                        color: "text.secondary",
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      GitHub
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="text"
                      size="small"
                      href="https://linkedin.com/in/ubaid-ali-bab868309"
                      target="_blank"
                      sx={{
                        color: "text.secondary",
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      LinkedIn
                    </Button>
                  </motion.div>
                </Stack>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
