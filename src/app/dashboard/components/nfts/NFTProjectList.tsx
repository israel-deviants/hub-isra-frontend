import { Box } from "@mui/material";
import NFTProjectListItem from "./NFTProjectListItem";
import { useProjectsStore } from "@/app/store/savedProjectsStore";

export default function NFTProjectList() {
  const projects = useProjectsStore((state) => state.projects);

  return (
    <Box>
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
