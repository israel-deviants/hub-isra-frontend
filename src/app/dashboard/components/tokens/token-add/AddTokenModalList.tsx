import { Box } from "@mui/material";
import { Token } from "@/types/Token";
import AddTokenModalListItem from "./AddTokenModalListItem";

interface AddTokenModalListProps {
  projects: Token[];
  selectAction: (project: Token) => void;
}

export default function AddTokenModalList({
  projects,
  selectAction,
}: AddTokenModalListProps) {
  return (
    <Box sx={{ height: "200px", paddingTop: 1 }}>
      {projects.map((project) => (
        <AddTokenModalListItem
          key={project.id}
          project={project}
          selectAction={(project: Token) => selectAction(project)}
        />
      ))}
    </Box>
  );
}
