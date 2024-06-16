import * as React from "react";
import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import Copyright from "@/components/Copyright";
import Header from "@/components/header/Header";
import Dashboard from "@/app/dashboard/components/Dashboard";
import AddProjectModal from "./dashboard/components/AddProjectModal";

export default function Home() {
  return (
    <Box>
      <AddProjectModal />
      <Header />
      <Container maxWidth={false}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "lightgrey",
            minHeight: "50vh",
          }}
        >
          <Dashboard />
        </Box>
        <Copyright />
      </Container>
    </Box>
  );
}
