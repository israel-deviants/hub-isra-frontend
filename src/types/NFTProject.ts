import { WalletAddress } from "./WalletAddress";

export interface NFTProject {
  id: string;
  owner: WalletAddress;
  contract_address: WalletAddress;
  name: string;
  asset_platform_id: string;
  symbol: string;
  thumb: string;
  fav?: boolean;
  floor: number;
}
