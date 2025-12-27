"use client";
import { skills } from "@/data/skills";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

// const skillLevels = {
//   React: 95,
//   "Next.js": 90,
//   TypeScript: 88,
//   "Node.js": 85,
//   MongoDB: 82,
//   Express: 88,
//   MUI: 92,
//   Tailwind: 90,
//   GraphQL: 75,
//   Git: 95,
// };

export default function Skills() {
  return (
    <Box id="skills" sx={{ py: { xs: 8, md: 6 } }}>
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
            TECHNICAL EXPERTISE
          </Typography>
          <Typography variant="h2" sx={{ mb: 2, fontWeight: 800 }}>
            Skills &{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Technologies
            </Box>
          </Typography>
          <Typography
            sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
          >
            Proficient in modern web technologies with focus on performance,
            scalability, and best practices
          </Typography>
        </Box>

        {/* Skill Categories */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {Object.entries(skills).map(([category, items], catIndex) => (
            <Grid size={{ xs: 12, md: 4 }} key={category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <Paper
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 2,
                    bgcolor: "background.paper",
                    border: "1px solid rgba(99, 102, 241, 0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "primary.main",
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 3,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        bgcolor: "primary.main",
                        borderRadius: "50%",
                      }}
                    />
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1.5}>
                    {items.map((skill) => (
                      <Box
                        key={skill}
                        sx={{
                          px: 2,
                          py: 1,
                          borderRadius: 2,
                          bgcolor: "rgba(99, 102, 241, 0.1)",
                          border: "1px solid rgba(99, 102, 241, 0.2)",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                        }}
                      >
                        {skill}
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Skill Progress Bars */}
        {/* <Box>
          <Typography variant="h5" sx={{ mb: 4, fontWeight: 700 }}>
            Proficiency Levels
          </Typography>
          <Grid container spacing={3}>
            {Object.entries(skillLevels).map(([skill, level], index) => (
              <Grid size={{ xs: 12, md: 6 }} key={skill}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography fontWeight={600}>{skill}</Typography>
                      <Typography color="primary.main">{level}%</Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={level}
                      sx={{
                        height: 8,
                        borderRadius: 2,
                        bgcolor: "rgba(255,255,255,0.1)",
                        "& .MuiLinearProgress-bar": {
                          borderRadius: 2,
                          background:
                            "linear-gradient(90deg, #6366F1, #22D3EE)",
                        },
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box> */}
      </motion.div>
    </Box>
  );
}
