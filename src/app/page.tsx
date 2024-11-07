import { Container, Typography, Box } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          color="text.secondary"
        >
          Full Stack Developer
        </Typography>
      </Box>
    </Container>
  );
}
