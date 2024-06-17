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

import useAgregatorData from "@/app/hooks/useAgreggatorData";
import { useProjectsStore } from "@/app/store/projectsStore";
import { NFTProject } from "@/types/NFTProject";
import { useEffect, useState } from "react";
import { useDashboardData } from "@/app/hooks/useDashboardData";

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
  const { handleAdd } = useDashboardData();
  const [selectedProject, setSelectedProject] = useState<NFTProject | null>(
    null
  );
  const [favorite, setFavorite] = useState(false);
  const [query, setQuery] = useState("");
  useAgregatorData(query);

  const handleTyping = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      if (event.target.value.length > 2) setQuery(event.target.value);
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    if (event.clipboardData) {
      const pasted = event.clipboardData.getData("text");
      if (pasted.length > 2) setQuery(pasted);
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

  useEffect(() => {
    const newData: NFTProject | null = selectedProject;
    if (newData) {
      if (newData) {
        newData.fav = favorite;
      }
      setSelectedProject(newData);
    }
  }, [favorite]);

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
              label="Name or Contract Address (Only ETH mainnet)"
              variant="outlined"
              sx={{ width: "100%" }}
              onChange={handleTyping}
              onPaste={handlePaste}
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
                <AddNFTProjectDetail
                  project={selectedProject}
                  favorite={favorite}
                  setFavorite={(val) => {
                    setFavorite(val);
                  }}
                />
              )}
            </Box>
          )}

          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              disabled={!selectedProject}
              onClick={() => {
                handleAdd(selectedProject);
                hideModalAction();
              }}
            >
              Add Project
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
