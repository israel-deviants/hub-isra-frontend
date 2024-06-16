"use client";
import { Box, Button, Link } from "@mui/material";
import Image from "next/image";
import { useWalletStore } from "@/store/walletStore";
import { useDisconnect } from "@web3modal/ethers/react";
import { Web3Modal } from "@/app/auth/components/Web3Modal";
import formatWalletBrief from "@/helpers/formatWallet";
import HeaderUserWidget from "./HeaderUserWidget";

export default function Header() {
  const wallet = useWalletStore((state: any) => state.wallet);

  const { disconnect } = useDisconnect();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem",
        height: "8rem",
      }}
    >
      <Image src="/img/happywhale.png" alt="logo" width={150} height={80} />
      {!wallet && (
        <Link href="/auth" color="secondary">
          <Button variant="contained">Login</Button>
        </Link>
      )}
      {wallet && (
        <HeaderUserWidget
          walletAddress={formatWalletBrief(wallet)}
          disconnect={disconnect}
        />
      )}
      <Web3Modal>
        <></>
      </Web3Modal>
    </Box>
  );
}
