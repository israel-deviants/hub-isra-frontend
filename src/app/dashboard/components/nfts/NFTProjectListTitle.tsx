import { Box, Grid, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function NFTProjectListTitle() {
  return (
    <Grid container spacing={2} paddingBottom={2}>
      <Grid item xs={3}>
        Icon
      </Grid>
      <Grid item xs={3}>
        <Box>Project</Box>
      </Grid>
      <Grid item xs={3}>
        <Box>Floor Price</Box>
      </Grid>
      <Grid item xs={3}>
        <Box></Box>
      </Grid>
    </Grid>
  );
}
