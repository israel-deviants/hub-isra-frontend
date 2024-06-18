import { Box, Button, Typography } from "@mui/material";
import NFTProjectListTitle from "./TokensListTitle";

interface TokensListPanelProps {
  addAction: () => void;
}

export default function TokensListPanel({ addAction }: TokensListPanelProps) {
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
          Followed Tokens
        </Typography>
        <Button variant="contained" color="primary" onClick={() => addAction()}>
          + Add
        </Button>
      </Box>
      <NFTProjectListTitle />
    </Box>
  );
}
