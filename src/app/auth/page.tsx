"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copyright from "@/app/components/Copyright";
import { Web3Modal } from "./components/Web3Modal";
import { Button } from "@mui/material";
import { useDisconnect, useWeb3Modal } from "@web3modal/ethers/react";
import { useWalletStore } from "@/app/store/walletStore";

export default function Auth() {
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const wallet = useWalletStore((state: any) => state.wallet);
  const jwt = useWalletStore((state: any) => state.jwt);

  return (
    <Web3Modal>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            background: "lightgrey",
            minHeight: "50vh",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" component="h1" sx={{ mb: 2, pt: 10 }}>
            Connect yor wallet to save your favorite projects!
          </Typography>

          <Box sx={{ maxWidth: "sm" }}>
            {!jwt && (
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  // TODO: This should go in a different Place, but ran out of time
                  disconnect();
                  useWalletStore.setState({
                    wallet: undefined,
                    signature: "",
                    jwt: "",
                  });
                  open();
                }}
              >
                Connect Wallet
              </Button>
            )}
            {jwt && (
              <Box>
                <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                  Welcome back {wallet}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  href="/"
                  disabled={jwt === ""}
                >
                  Continue
                </Button>
              </Box>
            )}
          </Box>
          <Box></Box>
        </Box>
        <Box sx={{}}>
          <Copyright />
        </Box>
      </Container>
    </Web3Modal>
  );
}
