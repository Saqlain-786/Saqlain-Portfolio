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
  Container,
} from "@mui/material";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: 2 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            mb={{ xs: 3, sm: 4, md: 5 }}
            fontWeight={500}
            sx={{
              fontSize: {
                xs: "1.8rem",
                sm: "2.2rem",
                md: "2.5rem",
                lg: "3rem",
              },
              lineHeight: 1.2,
            }}
          >
            Projects
          </Typography>

          <Grid container spacing={{ xs: 3, sm: 4, md: 4, lg: 4 }}>
            {projects.map((p, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4, lg: 4 }}
                key={p.title}
                sx={{
                  display: "flex",
                  flexDirection: "",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ height: "100%" }}
                >
                  <Card
                    sx={{
                      borderRadius: 3,
                      height: "100%",
                      transition: "0.4s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 30px 80px rgba(99,102,241,0.2)",
                      },
                      display: "flex",
                    }}
                  >
                    <CardContent
                      sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
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
                          sx={{
                            fontWeight: 600,
                            fontSize: { xs: "0.7rem", sm: "0.8rem" },
                          }}
                        />
                        {p.link && (
                          <IconButton
                            href={p.link}
                            target="_blank"
                            size="small"
                            sx={{
                              bgcolor: "rgba(99, 102, 241, 0.1)",
                              "&:hover": { bgcolor: "primary.main" },
                              width: { xs: 32, sm: 36 },
                              height: { xs: 32, sm: 36 },
                            }}
                          >
                            <LaunchIcon fontSize="small" />
                          </IconButton>
                        )}
                      </Box>

                      <Typography
                        variant="h5"
                        fontWeight={700}
                        gutterBottom
                        sx={{
                          fontSize: {
                            xs: "1.2rem",
                            sm: "1.3rem",
                            md: "1.4rem",
                            lg: "1.5rem",
                          },
                          lineHeight: 1.3,
                        }}
                      >
                        {p.title}
                      </Typography>

                      <Typography
                        mt={{ xs: 1, sm: 2 }}
                        color="text.secondary"
                        sx={{
                          lineHeight: { xs: 1.6, sm: 1.7 },
                          mb: { xs: 2, sm: 3 },
                          fontSize: {
                            xs: "0.85rem",
                            sm: "0.9rem",
                            md: "0.95rem",
                          },
                          flex: 1,
                        }}
                      >
                        {p.description}
                      </Typography>

                      <Box
                        mt={1}
                        display="flex"
                        gap={{ xs: 0.75, sm: 1 }}
                        flexWrap="wrap"
                        mb={{ xs: 2, sm: 3 }}
                      >
                        {p.tech.map((t) => (
                          <Chip
                            key={t}
                            label={t}
                            size="small"
                            sx={{
                              bgcolor: "rgba(99, 102, 241, 0.1)",
                              border: "1px solid rgba(99, 102, 241, 0.2)",
                              fontWeight: 600,
                              fontSize: { xs: "0.65rem", sm: "0.7rem" },
                              height: { xs: 24, sm: 28 },
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
                          sx={{
                            mt: "auto",
                            py: { xs: 0.75, sm: 1 },
                            fontSize: { xs: "0.85rem", sm: "0.9rem" },
                          }}
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
          <Box mt={{ xs: 6, sm: 8, md: 10 }}>
            <Typography
              variant="h5"
              fontWeight={500}
              mb={{ xs: 3, sm: 4 }}
              sx={{
                 fontSize: {
                xs: "1.8rem",
                sm: "2.2rem",
                md: "2.5rem",
                lg: "3rem",
              },
              }}
            >
              Live Projects
            </Typography>

            <Grid
              container
              spacing={{ xs: 2, sm: 2.5, md: 3 }}
              justifyContent="center"
            >
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
                <Grid
                  size={{ xs: 12, sm: 6, md: 4, lg: 4 }}
                  key={project.name}
                  sx={{
                    display: "flex",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    style={{ width: "100%" }}
                  >
                    <Card
                      sx={{
                        borderRadius: 3,
                        p: { xs: 2, sm: 2.5, md: 3 },
                        transition: "0.3s",
                        "&:hover": {
                          bgcolor: "rgba(99, 102, 241, 0.05)",
                          borderColor: "primary.main",
                          transform: { xs: "none", sm: "translateY(-4px)" },
                        },
                        width: "100%",
                        height: "100%",
                      }}
                      variant="outlined"
                    >
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ height: "100%" }}
                      >
                        <Typography
                          fontWeight={600}
                          sx={{
                            fontSize: {
                              xs: "0.9rem",
                              sm: "1rem",
                              md: "1.1rem",
                            },
                            lineHeight: 1.3,
                          }}
                        >
                          {project.name}
                        </Typography>
                        <IconButton
                          href={project.link}
                          target="_blank"
                          size="small"
                          sx={{
                            color: "primary.main",
                            ml: 1,
                            flexShrink: 0,
                          }}
                        >
                          <LaunchIcon fontSize="small" />
                        </IconButton>
                      </Stack>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
