import { Box } from "@mui/material";
import AddNFTProjectModalListItem from "./AddNFTProjectModalListItem";
import { NFTProject } from "@/types/NFTProject";

interface AddNFTProjectModalListProps {
  projects: NFTProject[];
  selectAction: (project: NFTProject) => void;
}

export default function AddNFTProjectModalList({
  projects,
  selectAction,
}: AddNFTProjectModalListProps) {
  return (
    <Box sx={{ height: "200px", paddingTop: 1 }}>
      {projects.map((project) => (
        <AddNFTProjectModalListItem
          key={project.id}
          project={project}
          selectAction={(project: NFTProject) => selectAction(project)}
        />
      ))}
    </Box>
  );
}
