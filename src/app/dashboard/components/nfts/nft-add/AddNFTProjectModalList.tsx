import { Box, Link } from "@mui/material";
import AddNFTProjectModalListItem from "./AddNFTProjectModalListItem";

export default function AddNFTProjectModalList() {
  return (
    <Box sx={{ height: "200px", paddingTop: 1 }}>
      <AddNFTProjectModalListItem />
      <AddNFTProjectModalListItem />
      <AddNFTProjectModalListItem />
      <AddNFTProjectModalListItem />
      <AddNFTProjectModalListItem />
    </Box>
  );
}
