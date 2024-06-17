import { Box } from "@mui/material";
import NFTProjectListItem from "./NFTProjectListItem";
import { useProjectsStore } from "@/app/store/savedProjectsStore";

interface NFTProjectListProps {
  onDelete: (id: string) => void;
}

export default function NFTProjectList({ onDelete }: NFTProjectListProps) {
  const projects = useProjectsStore((state) => state.projects);

  return (
    <Box>
      {projects && (
        <Box>
          {projects.map((project: any, index: number) => (
            <NFTProjectListItem
              key={index}
              project={project}
              onDelete={onDelete}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
