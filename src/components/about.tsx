"use client";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Box id="about" sx={{ py: { xs: 8, md: 6 } }}>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 4 }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" fontWeight={800} mb={3}>
              Professional Summary
            </Typography>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Typography
              sx={{
                fontSize: "1.1rem",
                color: "text.secondary",
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              Detail-oriented MERN Stack Developer with 1.9+ years of Frontend
              and 6+ months of Backend hands-on experience through internship
              and junior developer role at Burak Information Technology. Skilled
              in building scalable, responsive, and user-centric web
              applications using React.js, Next.js, Node.js, and MongoDB. Strong
              understanding of modern UI frameworks, API integration,
              authentication, and clean code practices. Passionate about
              learning and delivering high-quality solutions.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
