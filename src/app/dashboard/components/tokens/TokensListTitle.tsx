import { Box, Grid } from "@mui/material";

export default function TokensListTitle() {
  return (
    <Grid container spacing={2} paddingBottom={2}>
      <Grid item xs={3}>
        Icon
      </Grid>
      <Grid item xs={3}>
        <Box>Token</Box>
      </Grid>
      <Grid item xs={3}>
        <Box>Price</Box>
      </Grid>
      <Grid item xs={3}>
        <Box></Box>
      </Grid>
    </Grid>
  );
}
