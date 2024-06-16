import { Box, Grid, Link } from "@mui/material";

export default function AddNFTProjectModalListItem() {
  return (
    <Box>
      <Link
        variant="body1"
        sx={{
          textDecoration: "none",
          color: "grey",
          marginTop: 5,
          cursor: "pointer",
          ":hover": { color: "black" },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <Box>
              <img
                src="https://assets.coingecko.com/nft_contracts/images/242/standard/3R7s-ZV0_400x400.jpg?1707287234"
                alt="Priject Name"
                style={{ width: "28px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box>SuperPunks</Box>
          </Grid>
          <Grid item xs={1}>
            <Box>$1234.23</Box>
          </Grid>
        </Grid>
      </Link>
    </Box>
  );
}
