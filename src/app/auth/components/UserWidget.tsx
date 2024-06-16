import { useWalletStore } from "@/app/store/walletStore";
import { Button, Link, Typography, Box } from "@mui/material";

export default function UserWidget() {
  const wallet = useWalletStore((state: any) => state.wallet);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1rem",
        background: "lightgrey",
        height: "3rem",
      }}
    >
      <Typography variant="h6">Logo</Typography>
      {!wallet && (
        <Link href="/auth" color="secondary">
          <Button variant="contained">Login</Button>
        </Link>
      )}
      {wallet && <Typography>Logged as {wallet}</Typography>}
    </Box>
  );
}
