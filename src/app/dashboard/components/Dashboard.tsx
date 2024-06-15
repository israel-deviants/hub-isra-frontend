import { Box, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Welcome to your dashboard
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Here you will see your favorite projects listed
      </Typography>
    </Box>
  );
}
