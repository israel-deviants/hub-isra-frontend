import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddNFTProjectModalList from "./AddNFTProjectModalList";
import AddNFTProjectDetail from "./AddNFTProjectDetail";

import useProjectsData from "@/app/hooks/useProjectsData";
import { useProjectsStore } from "@/store/projectsStore";
import { NFTProject } from "@/types/NFTProject";
import { useEffect, useState } from "react";

interface AddProjectModalProps {
  showModal: boolean;
  hideModalAction: () => void;
}

export default function AddNFTProjectModal({
  showModal,
  hideModalAction,
}: AddProjectModalProps) {
  const projects = useProjectsStore((state) => state.projects);
  const setProjects = useProjectsStore((state) => state.setProjects);
  const [selectedProject, setSelectedProject] = useState<NFTProject | null>(
    null
  );
  const [query, setQuery] = useState("");
  useProjectsData(query);

  const handleTyping = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      if (event.target.value.length > 2) setQuery(event.target.value);
    }
  };

  useEffect(() => {
    if (selectedProject) {
      setProjects([]);
      setQuery("");
    }
  }, [selectedProject]);

  useEffect(() => {
    if (query !== "") {
      setSelectedProject(null);
    }
  }, [query]);

  useEffect(() => {
    if (showModal) {
      setProjects([]);
      setSelectedProject(null);
    }
  }, [showModal]);

  return (
    <Modal
      open={showModal}
      onClose={hideModalAction}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          padding: "4rem",
        }}
      >
        <Box
          sx={{
            width: "500px",
            height: "400px",
            background: "white",
            padding: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Add NFT Project
              <IconButton
                aria-label="close"
                onClick={hideModalAction}
                sx={{
                  marginLeft: "250px",
                  marginTop: "-25px",
                  position: "absolute",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Typography>
          </Box>
          <Typography
            component={"div"}
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            <TextField
              label="Name or Contract Address"
              variant="outlined"
              sx={{ width: "100%" }}
              onChange={handleTyping}
            />
          </Typography>

          {/* Project list */}
          {projects.length > 0 && (
            <AddNFTProjectModalList
              projects={projects}
              selectAction={(project: NFTProject) =>
                setSelectedProject(project)
              }
            />
          )}

          {/* Project Details */}
          {projects.length === 0 && (
            <Box sx={{ height: "200px", paddingTop: 1 }}>
              {selectedProject && (
                <AddNFTProjectDetail project={selectedProject} />
              )}
            </Box>
          )}

          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              disabled={!selectedProject}
            >
              Add Project
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
