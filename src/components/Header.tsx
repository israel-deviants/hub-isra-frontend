import { Box, Typography, Button, Link } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1rem",
        background: "lightgrey",
        height: "3rem",
      }}
    >
      <Typography variant="h6">Logo</Typography>
      <Link href="/auth" color="secondary">
        <Button variant="contained">Login</Button>
      </Link>
    </Box>
  );
}
