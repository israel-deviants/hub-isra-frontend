import { Box, Grid, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function NFTProjectListItem() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Box>
          <img src="https://assets.coingecko.com/nft_contracts/images/242/standard/3R7s-ZV0_400x400.jpg?1707287234" />
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box>SuperPunks</Box>
      </Grid>
      <Grid item xs={3}>
        <Box>$1234.23</Box>
      </Grid>
      <Grid item xs={3}>
        <Box>
          <IconButton sx={{ color: "grey" }}>
            <StarIcon />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
}
