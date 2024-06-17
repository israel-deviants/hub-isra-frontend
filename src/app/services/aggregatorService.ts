import { WalletAddress } from "@/types/WalletAddress";

const API_URL = "https://api.coingecko.com/api/v3/";
const API_KEY = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;
const OPTIONS = {
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": `${API_KEY}`,
  },
};

export const searchProjects = async (query: string) => {
  const response = await fetch(`${API_URL}search/?query=${query}`, {
    ...OPTIONS,
  });
  if (!response.ok) {
    throw new Error("Error in the response");
  }
  return response.json();
};

export const searchProjectByAddress = async (address: WalletAddress) => {
  const response = await fetch(`${API_URL}nfts/ethereum/contract/${address}`, {
    ...OPTIONS,
  });
  if (!response.ok) {
    throw new Error("Error in the response");
  }
  return response.json();
};

export const getProjectPrice = async (id: string) => {
  if (process.env.NEXT_PUBLIC_USE_FAKE_PRICES === "true") {
    var randPrice = Math.round(Math.random() * 1000);
    return randPrice;
  }

  const response = await fetch(`${API_URL}nfts/${id}`, {
    ...OPTIONS,
  });
  if (!response.ok) {
    throw new Error("Error in the response");
  }

  const project = await response.json();
  const price = project.floor_price.usd;

  return price;
};
