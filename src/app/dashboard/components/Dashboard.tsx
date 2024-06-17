"use client";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import NFTProjectsPanel from "./nfts/NFTProjectsPanel";
import { useWalletStore } from "@/app/store/walletStore";
import { SyntheticEvent, useState } from "react";
import { useProjectsStore } from "@/app/store/savedProjectsStore";

interface DashboardProps {
  showAddNFTProjectModalAction: () => void;
}

export default function Dashboard({
  showAddNFTProjectModalAction,
}: DashboardProps) {
  const { wallet } = useWalletStore();
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event: SyntheticEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };
  const { projects } = useProjectsStore();

  return (
    <Box
      sx={{
        textAlign: "center",
        width: "70%",
      }}
    >
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Welcome to your dashboard
      </Typography>

      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: "80%",
          margin: "auto",
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="basic tabs example"
          variant="fullWidth"
          centered
        >
          <Tab label="NFts" id="nfts" />
          <Tab label="Tokens" id="tokens" />
        </Tabs>
      </Box>
      {/* Followed NFT projects */}
      <NFTProjectsPanel addAction={showAddNFTProjectModalAction} />

      {!wallet && (
        <Typography variant="body1" sx={{ mb: 2 }}>
          Here you will see your favorite projects listed
        </Typography>
      )}
      {wallet && projects.length === 0 && (
        <Box>
          <Typography variant="body1" sx={{ mb: 2 }}>
            You still don't have any projects, go ahead and add one!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={showAddNFTProjectModalAction}
          >
            + Add
          </Button>
        </Box>
      )}
    </Box>
  );
}
