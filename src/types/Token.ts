import { WalletAddress } from "./WalletAddress";

export interface Token {
  id: string;
  owner: WalletAddress;
  contract_address: WalletAddress;
  name: string;
  asset_platform_id: string;
  symbol: string;
  thumb: string;
  fav?: boolean;
  price: number;
}
