"use client";
import { skills } from "@/data/skills";
import { Box, Grid, Paper, Stack, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <Box id="skills" sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center", mb: 3 }}>
            {/* <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                letterSpacing: { xs: 1, sm: 2 },
                display: "block",
                mb: { xs: 1.5, sm: 2 },
                fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.875rem" },
              }}
            >
              TECHNICAL EXPERTISE
            </Typography> */}
            <Typography
              variant="h2"
              sx={{
                mb: { xs: 1.5, sm: 2 },
                fontWeight: 500,
                fontSize: {
                  xs: "1.8rem",
                  sm: "2.2rem",
                  md: "2.5rem",
                  lg: "3rem",
                },
                lineHeight: 1.2,
              }}
            >
              Skills &{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Technologies
              </Box>
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                maxWidth: 600,
                mx: "auto",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
                px: { xs: 2, sm: 0 },
                lineHeight: { xs: 1.6, sm: 1.7 },
              }}
            >
              Proficient in modern web technologies with focus on performance,
              scalability, and best practices
            </Typography>
          </Box>

          {/* Skill Categories */}
          <Grid container spacing={3}>
            {Object.entries(skills).map(([category, items], catIndex) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                key={category}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                  style={{ height: "100%" }}
                >
                  <Paper
                    sx={{
                      p: 4,
                      height: "100%",
                      borderRadius: 3,
                      bgcolor: "background.paper",
                      border: "1px solid rgba(99, 102, 241, 0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "primary.main",
                        transform: { xs: "none", sm: "translateY(-8px)" },
                      },
                      display: "flex",
                      flexDirection: "column",
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
                        fontSize: {
                          xs: "1.1rem",
                          sm: "1.25rem",
                          md: "1.4rem",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 6, sm: 8 },
                          height: { xs: 6, sm: 8 },
                          bgcolor: "primary.main",
                          borderRadius: "50%",
                          flexShrink: 0,
                        }}
                      />
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Typography>
                    <Stack
                      direction="row"
                      flexWrap="wrap"
                      gap={2}
                      sx={{ flex: 1 }}
                    >
                      {items.map((skill) => (
                        <Box
                          key={skill}
                          sx={{
                            px:2,
                            py: 1,
                            borderRadius: 2,
                            bgcolor: "rgba(99, 102, 241, 0.1)",
                            border: "1px solid rgba(99, 102, 241, 0.2)",
                            fontSize: {
                              xs: "0.75rem",
                              sm: "0.8rem",
                              md: "0.85rem",
                              lg: "0.9rem",
                            },
                            fontWeight: 600,
                            flexShrink: 0,
                            transition: "all 0.2s ease",
                            "&:hover": {
                              bgcolor: "rgba(99, 102, 241, 0.15)",
                              transform: "scale(1.05)",
                            },
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

          {/* Additional Info Section for better visual balance */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Box
              sx={{
                bgcolor: "rgba(99, 102, 241, 0.05)",
                borderRadius: { xs: 2, sm: 3 },
                p: { xs: 3, sm: 4 },
                border: "1px solid rgba(99, 102, 241, 0.1)",
                textAlign: "center",
                display: { xs: "none", md: "block" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  color: "text.secondary",
                  maxWidth: 800,
                  mx: "auto",
                  lineHeight: 1.8,
                }}
              >
                Continuously learning and adapting to new technologies.
                Experienced in agile methodologies, version control (Git), and
                deploying applications on platforms like Vercel and Netlify.
              </Typography>
            </Box>
          </motion.div> */}
        </motion.div>
      </Container>
    </Box>
  );
}
