"use client";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: <GitHubIcon />,
    label: "GitHub",
    href: "https://github.com/Ubaid-ali786",
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/ubaid-ali-bab868309",
  },
  { icon: <EmailIcon />, label: "Email", href: "mailto:ubaid.udr@gmail.com" },
];

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Full Stack Development",
  "Frontend Development",
  "Backend Development",
  "API Development",
  "Performance Optimization",
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        pt: { xs: 6, md: 8 },
        pb: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Brand & Description */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    bgcolor: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ fontWeight: 900, fontSize: "1.2rem" }}>
                    SA
                  </Typography>
                </Box>
                <Typography variant="h6" fontWeight={800}>
                  Sayed Ubaid Ali
                </Typography>
              </Box>

              <Typography
                sx={{ color: "text.secondary", mb: 4, lineHeight: 1.7 }}
              >
                A passionate MERN Stack Developer crafting scalable web
                applications with focus on performance, clean code, and user
                experience.
              </Typography>

              <Stack direction="row" spacing={2}>
                {socialLinks.map((social) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      href={social.href}
                      target="_blank"
                      sx={{
                        bgcolor: "rgba(255,255,255,0.05)",
                        "&:hover": {
                          bgcolor: "primary.main",
                          transform: "translateY(-3px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Quick Links
              </Typography>
              <Stack spacing={1.5}>
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    sx={{
                      color: "text.secondary",
                      textDecoration: "none",
                      "&:hover": {
                        color: "primary.main",
                        textDecoration: "underline",
                      },
                      transition: "color 0.2s",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Services */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Services
              </Typography>
              <Stack spacing={1.5}>
                {services.map((service) => (
                  <Typography
                    component="div"
                    key={service}
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        bgcolor: "primary.main",
                        borderRadius: "50%",
                      }}
                    />
                    {service}
                  </Typography>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Contact & Newsletter */}
          <Grid size={{ xs: 12, md: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Get In Touch
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  mb: 3,
                }}
              >
                <LocationOnIcon sx={{ color: "primary.main", mt: 0.5 }} />
                <Box>
                  <Typography fontWeight={600}>Location</Typography>
                  <Typography
                    sx={{ color: "text.secondary", fontSize: "0.9rem" }}
                  >
                    Udaipur, Rajasthan, India
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}
              >
                <EmailIcon sx={{ color: "primary.main" }} />
                <Box>
                  <Typography fontWeight={600}>Email</Typography>
                  <Link
                    href="mailto:ubaid.udr@gmail.com"
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    ubaid.udr@gmail.com
                  </Link>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: "rgba(255,255,255,0.05)" }} />

        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              href="#hero"
              variant="outlined"
              size="small"
              sx={{
                borderRadius: 3,
                px: 3,
                borderColor: "rgba(255,255,255,0.1)",
                "&:hover": {
                  borderColor: "primary.main",
                  transform: "translateY(-3px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Back to Top ↑
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
