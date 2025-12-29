import { Box, Button, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box
      id="contact"
      my={6}
      p={6}
      sx={{
        borderRadius: 2,
        background: "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)",
      }}
    >
      <Typography variant="h3">Let’s work together</Typography>
      <Typography mt={2} maxWidth={500}>
        Open for MERN Stack roles, freelance projects & collaborations.
      </Typography>

      <Button
        variant="contained"
        sx={{ mt: 4, bgcolor: "#020617", color: "white" }}
        href="mailto:ksaqlain429@gmail.com"
      >
        Contact Me
      </Button>
    </Box>
  );
}
