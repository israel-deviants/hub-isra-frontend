"use client";
import { Box, Typography, Button, Link } from "@mui/material";
import { useWalletStore } from "@/store/walletStore";
import { useDisconnect, useWeb3Modal } from "@web3modal/ethers/react";
import { Web3Modal } from "@/app/auth/components/Web3Modal";
import formatWalletBrief from "@/helpers/formatWallet";

export default function Header() {
  const wallet = useWalletStore((state: any) => state.wallet);

  const { disconnect } = useDisconnect();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1rem",
        background: "grey",
        height: "8rem",
      }}
    >
      <Typography variant="h6">Logo</Typography>

      {!wallet && (
        <Link href="/auth" color="secondary">
          <Button variant="contained">Login</Button>
        </Link>
      )}
      {wallet && (
        <Box>
          <Typography>{formatWalletBrief(wallet)}</Typography>
          <Button variant="contained" size="large" onClick={() => disconnect()}>
            Disconnect
          </Button>
        </Box>
      )}
      <Web3Modal>
        <></>
      </Web3Modal>
    </Box>
  );
}
