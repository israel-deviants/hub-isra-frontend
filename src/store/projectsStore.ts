import { NFTProject } from "@/types/NFTProject";
import { create } from "zustand";

export interface ProjectsStore {
  projects: NFTProject[];
  setProjects: (projects: NFTProject[]) => void;
}

export const useProjectsStore = create<ProjectsStore>((set) => ({
  projects: [],
  setProjects: (projects) => set({ projects }),
}));
