import { WalletAddress } from "@/types/WalletAddress";

export const login = async (
  message: string,
  signature: string,
  address: WalletAddress
) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, signature, address }),
  });
  if (!response.ok) {
    throw new Error("Error in the response");
  }
  return response.json();
};
