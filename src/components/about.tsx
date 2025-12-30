"use client";
import { Box, Typography, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Box id="about" sx={{ py: { xs: 1, sm: 3, md: 4, lg: 5 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, sm: 5, md: 6 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h3"
                fontWeight={500}
                mb={1}
                sx={{
                  fontSize: {
                    xs: "1.8rem",
                    sm: "2.2rem",
                    md: "2.5rem",
                    lg: "2.75rem",
                  },
                  lineHeight: { xs: 1.3, sm: 1.2 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Professional Summary
              </Typography>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.95rem",
                    sm: "1.05rem",
                    md: "1.1rem",
                    lg: "1.15rem",
                  },
                  color: "text.secondary",
                  // mb: { xs: 2, sm: 3, md: 1 },
                  textAlign: "center",
                  px: { xs: 1, sm: 0 },
                }}
              >
                Detail-oriented MERN Stack Developer with 2+ years of Frontend
                and 6+ months of Backend hands-on experience through internship
                and junior developer role at Burak Information Technology.
                Skilled in building scalable, responsive, and user-centric web
                applications using React.js, Next.js, Node.js, and MongoDB.
                Strong understanding of modern UI frameworks, API integration,
                authentication, and clean code practices. Passionate about
                learning and delivering high-quality solutions.
              </Typography>

              {/* Additional Skills/Highlights for better visual balance */}
              <Box
                sx={{
                  display: {  md: "block" },
                  mt: 2,
                  pt: 1,
                  borderTop: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Grid container spacing={2}>
                  {[
                    "MERN Stack Expert",
                    "API Integration",
                    "UI/UX Focused ",
                    "Clean Code Practices",
                  ].map((skill, index) => (
                    <Grid size={{ xs: 12,sm:12,md:6,lg:6 }} key={index} >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            bgcolor: "primary.main",
                          }}
                        />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          fontWeight={500}
                        >
                          {skill}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
