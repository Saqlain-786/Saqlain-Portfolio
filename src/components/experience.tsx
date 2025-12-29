"use client";
import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Experience() {
  const experience = {
    title: "MERN Stack Junior Developer",
    company: "Burak Information Technology",
    period: "Sept 2023 – Present",
    location: "Udaipur, Rajasthan",
    duration:
      "(4 Months Intern → Junior Developer | Total Experience: ~2 Years)",
    responsibilities: [
      "Developed and maintained scalable frontend applications using React.js and Next.js",
      "Designed and implemented RESTful APIs using Node.js and Express.js",
      "Integrated MongoDB with Mongoose for efficient data management",
      "Built modern, accessible UI components using Material UI and Bootstrap",
      "Implemented secure authentication and role-based access control (RBAC)",
      "Created reusable components, custom hooks, and form validation logic",
      "Collaborated with cross-functional teams using Git and Agile workflows",
      "Optimized application performance and improved code maintainability",
    ],
  };

  return (
    <Box id="experience" sx={{ py: { xs: 8, md: 6 } }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Typography variant="h3" mb={4} fontWeight={800}>
          Professional Experience
        </Typography>

        <Paper
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 2,
            bgcolor: "background.paper",
            border: "1px solid rgba(99, 102, 241, 0.1)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 3,
            }}
          >
            <Box>
              <Typography variant="h5" fontWeight={700}>
                {experience.title}
              </Typography>
              <Typography color="primary" fontWeight={600} mt={1}>
                {experience.company}
              </Typography>
            </Box>
            <Chip
              label={experience.period}
              sx={{
                bgcolor: "rgba(99, 102, 241, 0.1)",
                fontWeight: 600,
              }}
            />
          </Box>

          <Stack direction="row" spacing={2} mb={3}>
            <Chip
              label={experience.location}
              size="small"
              sx={{ bgcolor: "rgba(34, 211, 238, 0.1)" }}
            />
            <Chip
              label={experience.duration}
              size="small"
              sx={{ bgcolor: "rgba(99, 102, 241, 0.1)" }}
            />
          </Stack>

          <Box component="ul" sx={{ pl: 2 }}>
            {experience.responsibilities.map((item, index) => (
              <Typography
                component="li"
                key={index}
                sx={{
                  color: "text.secondary",
                  mb: 2,
                  lineHeight: 1.7,
                  "&::marker": {
                    color: "primary.main",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
}
