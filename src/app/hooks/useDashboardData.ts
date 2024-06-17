import { useEffect, useState } from "react";
import {
  getProjects,
  deleteProject,
  addProject,
} from "../services/dashboardService";
import { useProjectsStore } from "../store/savedProjectsStore";
import { NFTProject } from "@/types/NFTProject";

export const useDashboardData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [refresh, setRefresh] = useState(true);

  const setProjects = useProjectsStore((state) => state.setProjects);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (e) {
        setError(e);
        setRefresh(true); // Add this line to refresh the list when there is an error
      } finally {
        setLoading(false);
        setRefresh(false);
      }
    };

    fetchProjects();
  }, [refresh]);

  useEffect(() => {
    setRefresh(true);
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteProject(id);
    } catch (e) {
      setError(e);
    } finally {
      setRefresh(true);
    }
  };

  const handleAdd = async (project: NFTProject | null) => {
    if (!project) return;
    console.log("add project", project);
    try {
      await addProject(project);
      console.log("added project", project);
    } catch (e) {
      setError(e);
    } finally {
      console.log("finally refreshing projects");
      setRefresh(true);
    }
  };

  return { loading, error, handleDelete, handleAdd };
};
