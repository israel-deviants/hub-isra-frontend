import React from "react";
import { NFTProject } from "@/types/NFTProject";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";

interface AddNFTProjectDetailProps {
  project: NFTProject | null;
  favorite: boolean;
  setFavorite: (value: boolean) => void;
}

export default function AddNFTProjectDetail({
  project,
  favorite,
  setFavorite,
}: AddNFTProjectDetailProps) {
  const handleFavoriteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  };

  return (
    <Box>
      <Grid container spacing={2} padding={3}>
        <Grid item xs={3}>
          <Box>
            <img src={project?.thumb} width={64} />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Typography variant="h6">{project?.name}</Typography>
          </Box>
          <Box>Floor Price: ${project?.floor}</Box>
        </Grid>
      </Grid>

      <FormControlLabel
        control={
          <Checkbox checked={favorite} onChange={handleFavoriteChange} />
        }
        label="Add to Favorites"
      />
    </Box>
  );
}
