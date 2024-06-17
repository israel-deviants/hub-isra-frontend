import { useEffect } from "react";
import {
  searchProjectByAddress,
  searchProjects,
  getProjectPrice,
} from "../services/aggregatorService";
import { useProjectsStore } from "../store/projectsStore";
import isWalletAddress from "../helpers/isWalletAddress";
import { WalletAddress } from "@/types/WalletAddress";
import { NFTProject } from "@/types/NFTProject";
import usePricesStore from "../store/pricesStore";

const useAgregatorData = (query: string = "") => {
  const setProjects = useProjectsStore((state) => state.setProjects);
  const prices = usePricesStore((state) => state.prices);
  const setPrice = usePricesStore((state) => state.setPrice);

  const fetchAndSetPrice = async (id: string) => {
    if (!prices.has(id)) {
      setPrice(id, 0); //to prevent multiple calls
      const price = await getProjectPrice(id);
      setPrice(id, price);
      return price;
    }
    return prices.get(id);
  };

  useEffect(() => {
    const fetchProjectsData = async (query: string) => {
      if (query === "") return;
      try {
        let data;
        if (isWalletAddress(query)) {
          data = await searchProjectByAddress(query as WalletAddress);
        } else data = await searchProjects(query);

        if (data.nfts) {
          const limitedProjects = data.nfts.slice(0, 5);
          const updatedData = [];

          for (let project of limitedProjects) {
            const price = await fetchAndSetPrice(project.id);
            updatedData.push({ ...project, floor: price });
          }

          setProjects(updatedData);
        }
        if (data.contract_address === query) {
          const price = await fetchAndSetPrice(data.id);

          const project: NFTProject = {
            id: data.id,
            contract_address: data.contract_address,
            asset_platform_id: data.asset_platform_id,
            name: data.name,
            symbol: data.symbol,
            thumb: data.image.small,
            floor: price,
          };

          setProjects([project]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjectsData(query);
  }, [setProjects, query]);
};

export default useAgregatorData;
