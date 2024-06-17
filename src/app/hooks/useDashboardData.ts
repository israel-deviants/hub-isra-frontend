import { useEffect, useState } from "react";
import { getProjects } from "../services/dashboardService";
import { NFTProject } from "@/types/NFTProject";

export const useDashboardData = () => {
  const [projects, setProjects] = useState<NFTProject[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};
