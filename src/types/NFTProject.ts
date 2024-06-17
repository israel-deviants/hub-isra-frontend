import { WalletAddress } from "./WalletAddress";

export interface NFTProject {
  id: string;
  contract_address: WalletAddress;
  name: string;
  asset_platform_id: string;
  symbol: string;
  thumb: string;
  fav?: boolean;
  floor: number;
}
