import { NFTProject } from "@/types/NFTProject";
import { useWalletStore } from "../store/walletStore";

// call GET projects from the API
export const getProjects = async () => {
  const jwt = useWalletStore.getState().jwt;
  if (!jwt) return [];
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}projects`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error in the response");
  }

  const projects: NFTProject[] = await response.json();

  return projects.sort(
    (a: NFTProject, b: NFTProject) => Number(b.fav) - Number(a.fav)
  );
};

export const deleteProject = async (id: string) => {
  const jwt = useWalletStore.getState().jwt;
  if (!jwt) return [];
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}projects/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Error in the response");
  }
};

export const addProject = async (project: NFTProject) => {
  const jwt = useWalletStore.getState().jwt;
  if (!jwt) return [];
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(project),
  });
  if (!response.ok) {
    throw new Error("Error in the response");
  }
};
