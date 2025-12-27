"use client";
import { projects } from "@/data/projects";
import LaunchIcon from "@mui/icons-material/Launch";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 6 } }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Typography variant="h3" mb={4} fontWeight={800}>
          Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((p, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={p.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    transition: "0.4s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 30px 80px rgba(99,102,241,0.2)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 2,
                      }}
                    >
                      <Chip
                        label={p.category}
                        color="primary"
                        size="small"
                        sx={{ fontWeight: 600 }}
                      />
                      {p.link && (
                        <IconButton
                          href={p.link}
                          target="_blank"
                          size="small"
                          sx={{
                            bgcolor: "rgba(99, 102, 241, 0.1)",
                            "&:hover": { bgcolor: "primary.main" },
                          }}
                        >
                          <LaunchIcon fontSize="small" />
                        </IconButton>
                      )}
                    </Box>

                    <Typography variant="h5" fontWeight={700} gutterBottom>
                      {p.title}
                    </Typography>

                    <Typography
                      mt={2}
                      color="text.secondary"
                      sx={{ lineHeight: 1.7, mb: 3, minHeight: "80px" }}
                    >
                      {p.description}
                    </Typography>

                    <Box mt={3} display="flex" gap={1} flexWrap="wrap" mb={3}>
                      {p.tech.map((t) => (
                        <Chip
                          key={t}
                          label={t}
                          size="small"
                          sx={{
                            bgcolor: "rgba(99, 102, 241, 0.1)",
                            border: "1px solid rgba(99, 102, 241, 0.2)",
                            fontWeight: 600,
                          }}
                        />
                      ))}
                    </Box>

                    {p.link && (
                      <Button
                        variant="outlined"
                        fullWidth
                        href={p.link}
                        target="_blank"
                        endIcon={<LaunchIcon />}
                      >
                        View Project
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Live Projects Section */}
        <Box mt={8}>
          <Typography variant="h5" fontWeight={700} mb={4}>
            Live Projects
          </Typography>

          <Grid container spacing={2}>
            {[
              {
                name: "Digital Menu App",
                link: "https://digital-menu-v2-2025.vercel.app",
              },
              {
                name: "Job Portal Platform",
                link: "https://jobportal-web-2.vercel.app",
              },
              {
                name: "Leamedicare Website",
                link: "https://www.leamedicare.com",
              },
              {
                name: "Leamedicare Company Portal",
                link: "https://app.leamedicare.com/company/auth/sign-in",
              },
              { name: "Sedar Global", link: "https://www.sedarglobal.com" },
            ].map((project, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.name}>
                <Card
                  sx={{
                    p: 3,
                    transition: "0.3s",
                    "&:hover": {
                      bgcolor: "rgba(99, 102, 241, 0.05)",
                      borderColor: "primary.main",
                    },
                  }}
                  variant="outlined"
                  key={index}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography fontWeight={600}>{project.name}</Typography>
                    <IconButton
                      href={project.link}
                      target="_blank"
                      size="small"
                      sx={{ color: "primary.main" }}
                    >
                      <LaunchIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>
    </Box>
  );
}
