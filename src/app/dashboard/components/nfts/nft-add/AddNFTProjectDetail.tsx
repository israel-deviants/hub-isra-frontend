import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
export default function AddNFTProjectDetail() {
  return (
    <Box sx={{ height: "200px", paddingTop: 1 }}>
      <Grid container spacing={2} padding={3}>
        <Grid item xs={3}>
          <Box>
            <img src="https://assets.coingecko.com/nft_contracts/images/242/standard/3R7s-ZV0_400x400.jpg?1707287234" />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Typography variant="h6">SuperPunks</Typography>
          </Box>
          <Box>Floor: $1234.23</Box>
        </Grid>
      </Grid>

      <FormControlLabel
        control={<Checkbox checked={false} />}
        label="Add to Favorites"
      />
    </Box>
  );
}
