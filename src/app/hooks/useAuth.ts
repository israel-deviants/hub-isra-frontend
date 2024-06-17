import { useState, useCallback } from "react";
import { login } from "../services/userService";
import { WalletAddress } from "@/types/WalletAddress";

const useAuth = () => {
  const [user, setUser] = useState(null);

  const handleLogin = useCallback(
    async (message: string, signature: string, address: WalletAddress) => {
      const user = await login(message, signature, address);
      setUser(user);
    },
    []
  );

  return { user, handleLogin };
};

export default useAuth;
