import { Box } from "@mui/material";
import NFTProjectListItem from "./NFTProjectListItem";
import { useDashboardData } from "@/app/hooks/useDashboardData";

export default function NFTProjectList() {
  const { projects, loading, error } = useDashboardData();

  return (
    <Box>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {projects && (
        <Box>
          {projects.map((project: any, index: number) => (
            <NFTProjectListItem key={index} project={project} />
          ))}
        </Box>
      )}
    </Box>
  );
}
