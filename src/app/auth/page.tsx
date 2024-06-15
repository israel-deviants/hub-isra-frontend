import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NextLink from "next/link";
import ProTip from "@/components/ProTip";
import Copyright from "@/components/Copyright";

export default function Auth() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          background: "lightgrey",
          minHeight: "50vh",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2, pt: 10 }}>
          Connect yor wallet to save your favorite projects!
        </Typography>

        <Box sx={{ maxWidth: "sm" }}>
          <Button
            variant="contained"
            size="large"
            component={NextLink}
            href="/"
          >
            Connect Wallet
          </Button>
        </Box>
        <Box></Box>
      </Box>
      <Box sx={{}}>
        <Copyright />
      </Box>
    </Container>
  );
}
