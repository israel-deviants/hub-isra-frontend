import { useEffect } from "react";
import { searchProjects } from "../services/projectsService";
import { useProjectsStore } from "../store/projectsStore";

const useProjectsData = (query: string = "") => {
  const setProjects = useProjectsStore((state) => state.setProjects);

  useEffect(() => {
    const fetchProjectsData = async (query: string) => {
      if (query === "") return;
      try {
        const data = await searchProjects(query);

        if (data.nfts) {
          const limitedProjects = data.nfts.slice(0, 5);
          setProjects(limitedProjects);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjectsData(query);
  }, [setProjects, query]);
};

export default useProjectsData;
