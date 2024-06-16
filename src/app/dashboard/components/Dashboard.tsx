"use client";
import { Box, Button, Typography } from "@mui/material";
import NFTProjectList from "./NFTProjectList";
import { useWalletStore } from "@/store/walletStore";

export default function Dashboard() {
  const { wallet } = useWalletStore();

  return (
    <Box
      sx={{
        textAlign: "center",
        width: "70%",
      }}
    >
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Welcome to your dashboard{" "}
        {wallet && (
          <Button variant="contained" color="primary">
            + Add Project
          </Button>
        )}
      </Typography>
      {!wallet && (
        <Typography variant="body1" sx={{ mb: 2 }}>
          Here you will see your favorite projects listed
        </Typography>
      )}
      <Box>
        <Typography variant="body1" sx={{ mb: 2 }}>
          You still don't have any projects, go ahead and add one!
        </Typography>
        <Button variant="contained" color="primary">
          + Add
        </Button>
      </Box>

      <Box>
        <NFTProjectList />
      </Box>
    </Box>
  );
}
