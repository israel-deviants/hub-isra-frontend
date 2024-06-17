import { Box, Grid, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import { NFTProject } from "@/types/NFTProject";

interface NFTProjectListItemProps {
  project: NFTProject;
}

export default function NFTProjectListItem({
  project,
}: NFTProjectListItemProps) {
  return (
    <Grid container spacing={2}>
      <Box>
        <IconButton sx={{ color: "grey" }}></IconButton>
      </Box>
      <Grid item xs={3}>
        <Box>
          <img src={project.thumb} style={{ width: 64 }} />
        </Box>
      </Grid>
      <Grid item xs={3}>
        {project.name}
        {project.fav && <StarIcon sx={{ color: "gold" }} />}
      </Grid>
      <Grid item xs={3}>
        <Box>$1234.23</Box>
      </Grid>
      <Grid item xs={2}>
        <IconButton sx={{ color: "carbon" }}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
