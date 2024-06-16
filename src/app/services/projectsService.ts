const API_URL = "https://api.coingecko.com/api/v3/";
const OPTIONS = {
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "****",
  },
};

export const searchProjects = async (query: string) => {
  const response = await fetch(`${API_URL}search/?query=${query}`, {
    ...OPTIONS,
  });
  if (!response.ok) {
    throw new Error("Error in the response");
  }
  return response.json();
};
