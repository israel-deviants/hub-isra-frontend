import { WalletAddress } from "@/types/WalletAddress";

export default function formatWalletBrief(wallet: WalletAddress) {
  return wallet ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}` : "";
}
