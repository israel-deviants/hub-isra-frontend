import { Box, Button, Typography } from "@mui/material";
import NFTProjectList from "./NFTProjectList";
import NFTProjectListTitle from "./NFTProjectListTitle";

interface NFTProjectsPanelProps {
  addAction: () => void;
}

export default function NFTProjectsPanel({ addAction }: NFTProjectsPanelProps) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2rem",
          height: "8rem",
          margin: "auto",
          width: "85%",
        }}
      >
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Followed NFT projects
        </Typography>
        <Button variant="contained" color="primary" onClick={addAction}>
          + Add
        </Button>
      </Box>
      <NFTProjectListTitle />
      <NFTProjectList />
    </Box>
  );
}
