import { useEffect, useState, useCallback } from "react";
import {
  getProjects,
  deleteProject,
  addProject,
} from "../services/dashboardService";
import { useProjectsStore } from "../store/savedProjectsStore";
import { NFTProject } from "@/types/NFTProject";
import usePricesStore from "../store/pricesStore";
import { getProjectPrice } from "../services/aggregatorService";

export const useDashboardData = () => {
  const [error, setError] = useState<any>(null);

  const setProjects = useProjectsStore((state) => state.setProjects);
  const prices = usePricesStore((state) => state.prices);

  const fetchProjects = useCallback(async () => {
    try {
      const data = await getProjects();

      //get prices
      let updatedData = [];

      for (let project of data) {
        if (!prices.has(project.id)) {
          prices.set(project.id, 0); //to prevent multiple calls
          const price = await getProjectPrice(project.id);
          prices.set(project.id, price);
          updatedData.push({ ...project, floor: price });
        } else {
          updatedData.push({ ...project, floor: prices.get(project.id) });
        }
      }

      setProjects(updatedData);
    } catch (e) {
      setError(e);
    }
  }, [setProjects]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleDelete = useCallback(
    async (id: string) => {
      try {
        await deleteProject(id);
        fetchProjects();
      } catch (e) {
        setError(e);
      }
    },
    [fetchProjects]
  );

  const handleAdd = useCallback(
    async (project: NFTProject | null) => {
      if (!project) return;
      try {
        await addProject(project);
        fetchProjects();
      } catch (e) {
        setError(e);
      }
    },
    [fetchProjects]
  );

  return { error, handleDelete, handleAdd };
};
