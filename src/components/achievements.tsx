"use client";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";
import TimelineIcon from "@mui/icons-material/Timeline";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Avatar, Box, Chip, Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: <WorkspacePremiumIcon />,
    title: "Certified MERN Developer",
    description: "Full Stack Development Certification from reputable platform",
    year: "2023",
    color: "#6366F1",
  },
  {
    icon: <EmojiEventsIcon />,
    title: "Hackathon Winner",
    description:
      "Won 1st prize in University Tech Fest for innovative web solution",
    year: "2022",
    color: "#22D3EE",
  },
  {
    icon: <SchoolIcon />,
    title: "B.Tech in Computer Science",
    description: "Graduated with distinction in Web Technologies",
    year: "2023",
    color: "#10B981",
  },
  {
    icon: <TimelineIcon />,
    title: "15+ Projects Delivered",
    description: "Successfully completed projects across various domains",
    year: "Present",
    color: "#F59E0B",
  },
];

const certifications = [
  "MERN Stack Certification - Udemy",
  "React & Next.js Certification - Coursera",
  "Node.js Backend Development - freeCodeCamp",
  "MongoDB for Developers - MongoDB University",
];

export default function Achievements() {
  return (
    <Box id="achievements" sx={{ py: { xs: 8, md: 12 } }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              letterSpacing: 2,
              display: "block",
              mb: 2,
            }}
          >
            RECOGNITIONS
          </Typography>
          <Typography variant="h2" sx={{ mb: 2, fontWeight: 800 }}>
            Achievements &{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Milestones
            </Box>
          </Typography>
          <Typography
            sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
          >
            Recognition of hard work and dedication in the field of web
            development
          </Typography>
        </Box>

        {/* Achievement Cards */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {achievements.map((achievement, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={achievement.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Paper
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 4,
                    bgcolor: "background.paper",
                    border: "1px solid rgba(255,255,255,0.05)",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      borderColor: achievement.color,
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: achievement.color,
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: `${achievement.color}20`,
                      color: achievement.color,
                      width: 60,
                      height: 60,
                      mx: "auto",
                      mb: 3,
                    }}
                  >
                    {achievement.icon}
                  </Avatar>

                  <Chip
                    label={achievement.year}
                    size="small"
                    sx={{
                      mb: 2,
                      bgcolor: `${achievement.color}15`,
                      color: achievement.color,
                      fontWeight: 600,
                    }}
                  />

                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {achievement.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {achievement.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Certifications Section */}
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
                Professional Certifications
              </Typography>
              <Typography
                sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}
              >
                Continuously upgrading skills through certified courses and
                staying updated with the latest industry trends and
                technologies.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                {certifications.map((cert) => (
                  <Chip
                    key={cert}
                    label={cert}
                    sx={{
                      bgcolor: "rgba(99, 102, 241, 0.1)",
                      border: "1px solid rgba(99, 102, 241, 0.2)",
                      fontWeight: 600,
                      "& .MuiChip-label": { px: 2 },
                    }}
                  />
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 4,
                  bgcolor: "background.paper",
                  border: "1px solid rgba(99, 102, 241, 0.1)",
                }}
              >
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Continuous Learning
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 3 }}>
                  Currently expanding knowledge in:
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                  {[
                    "Microservices",
                    "AWS/Azure",
                    "Docker",
                    "Kubernetes",
                    "GraphQL",
                    "Web3",
                  ].map((tech) => (
                    <Box
                      key={tech}
                      sx={{
                        px: 2.5,
                        py: 1,
                        borderRadius: 2,
                        bgcolor: "rgba(34, 211, 238, 0.1)",
                        border: "1px solid rgba(34, 211, 238, 0.2)",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          color: "#22D3EE",
                        }}
                      >
                        {tech}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    mt: 4,
                    pt: 3,
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "0.9rem", color: "text.secondary" }}
                  >
                    <Box
                      component="span"
                      sx={{ color: "primary.main", fontWeight: 700 }}
                    >
                      Goal:
                    </Box>{" "}
                    To master advanced backend systems and cloud architecture in
                    2024
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
}
