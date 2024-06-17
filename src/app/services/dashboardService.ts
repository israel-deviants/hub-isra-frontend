import { NFTProject } from "@/types/NFTProject";

// call GET projects from the API
export const getProjects = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}projects`);
  if (!response.ok) {
    throw new Error("Error in the response");
  }

  const projects: NFTProject[] = await response.json();

  return projects.sort(
    (a: NFTProject, b: NFTProject) => Number(b.fav) - Number(a.fav)
  );
};

export const deleteProject = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}projects/${id}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error("Error in the response");
  }
};

export const addProject = async (project: NFTProject) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });
  if (!response.ok) {
    throw new Error("Error in the response");
  }
};
