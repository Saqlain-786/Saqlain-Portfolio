"use client";
import SchoolIcon from "@mui/icons-material/School";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Education() {
  const education = {
    degree: "Bachelor of Arts (BA)",
    university: "Mohanlal Sukhadia University, Udaipur",
    period: "2023 – 2026 (Expected)",
  };

  const languages = [
    { language: "English", level: "Professional" },
    { language: "Hindi", level: "Fluent" },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 6 } }}>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Typography variant="h5" fontWeight={700} mb={4}>
              Education
            </Typography>
            <Paper
              sx={{
                p: 4,
                borderRadius: 2,
                bgcolor: "background.paper",
                border: "1px solid rgba(99, 102, 241, 0.1)",
              }}
            >
              <Stack direction="row" alignItems="center" gap={2} mb={3}>
                <SchoolIcon sx={{ color: "primary.main", fontSize: "2rem" }} />
                <Box>
                  <Typography variant="h6" fontWeight={700}>
                    {education.degree}
                  </Typography>
                  <Typography color="text.secondary">
                    {education.university}
                  </Typography>
                </Box>
              </Stack>
              <Typography>
                <strong>Expected Graduation:</strong> {education.period}
              </Typography>
            </Paper>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Typography variant="h5" fontWeight={700} mb={4}>
              Language Proficiency
            </Typography>
            <Paper
              sx={{
                p: 4,
                borderRadius: 2,
                bgcolor: "background.paper",
                border: "1px solid rgba(99, 102, 241, 0.1)",
              }}
            >
              <Stack spacing={3}>
                {languages.map((lang) => (
                  <Box key={lang.language}>
                    <Typography fontWeight={600} gutterBottom>
                      {lang.language}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          flex: 1,
                          height: 8,
                          bgcolor: "rgba(255,255,255,0.1)",
                          borderRadius: 2,
                          overflow: "hidden",
                        }}
                      >
                        <Box
                          sx={{
                            width:
                              lang.level === "Professional" ? "85%" : "100%",
                            height: "100%",
                            bgcolor: "primary.main",
                            borderRadius: 2,
                          }}
                        />
                      </Box>
                      <Typography fontSize="0.9rem" color="text.secondary">
                        {lang.level}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
