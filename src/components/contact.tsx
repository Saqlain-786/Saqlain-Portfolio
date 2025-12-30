import { Box, Button, Container, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Container>
      <Box
        id="contact"
        my={3}
        p={4}
        sx={{
          borderRadius: 2,
          background: "linear-gradient(135deg, #dcd9e9ff 0%, #dfdfdfff 100%)",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={400}
          sx={{
            fontSize: {
              xs: "1.3rem",
              sm: "1.8rem",
              md: "2rem",
              lg: "2rem",
            },
          }}
        >
          Let’s work together
        </Typography>
        <Typography mt={2} maxWidth={500}>
          Open for MERN Stack roles, freelance projects & collaborations.
        </Typography>

        <Button
          size="small"
          variant="contained"
          sx={{ mt: 4, bgcolor: "#020617", color: "white" }}
          href="mailto:ksaqlain429@gmail.com"
        >
          Contact Me
        </Button>
      </Box>
    </Container>
  );
}
