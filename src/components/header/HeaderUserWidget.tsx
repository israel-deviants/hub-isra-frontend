import { Box, Button, Typography } from "@mui/material";

interface HeaderUserWidgetProps {
  walletAddress: string;
  disconnect: () => void;
}

export default function HeaderUserWidget({
  walletAddress,
  disconnect,
}: HeaderUserWidgetProps) {
  return (
    <Box>
      <Typography>{walletAddress}</Typography>
      <Button variant="contained" size="large" onClick={() => disconnect()}>
        Disconnect
      </Button>
    </Box>
  );
}
