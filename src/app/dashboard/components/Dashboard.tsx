"use client";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import NFTProjectsPanel from "./nfts/NFTProjectsPanel";
import { useWalletStore } from "@/app/store/walletStore";
import { SyntheticEvent, useState } from "react";
import { useProjectsStore } from "@/app/store/savedProjectsStore";
import TokensListPanel from "./tokens/TokensListPanel";

interface DashboardProps {
  showAddNFTProjectModalAction: () => void;
  showAddTokenModalAction: () => void;
}

export default function Dashboard({
  showAddNFTProjectModalAction,
  showAddTokenModalAction,
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
      {wallet && tabValue === 0 && (
        <NFTProjectsPanel addAction={showAddNFTProjectModalAction} />
      )}
      {wallet && tabValue === 1 && (
        <TokensListPanel addAction={showAddTokenModalAction} />
      )}
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
        </Box>
      )}
    </Box>
  );
}
