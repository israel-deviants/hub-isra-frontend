"use client";
import * as React from "react";
import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import Copyright from "@/components/Copyright";
import Header from "@/components/header/Header";
import Dashboard from "@/app/dashboard/components/Dashboard";
import AddNFTProjectModal from "./dashboard/components/nfts/nft-add/AddNFTProjectModal";

export default function Home() {
  const [showAddProjectModal, setShowAddProjectModal] = React.useState(false);

  return (
    <Box>
      <AddNFTProjectModal
        showModal={showAddProjectModal}
        hideModalAction={() => setShowAddProjectModal(false)}
      />
      <Header />
      <Container maxWidth={false}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // background: "lightgrey",
            minHeight: "50vh",
          }}
        >
          <Dashboard
            showAddNFTProjectModalAction={() => setShowAddProjectModal(true)}
          />
        </Box>
        <Copyright />
      </Container>
    </Box>
  );
}
