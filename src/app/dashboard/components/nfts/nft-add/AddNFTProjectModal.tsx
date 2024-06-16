import Checkbox from "@mui/material/Checkbox";
import {
  Modal,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddNFTProjectModalList from "./AddNFTProjectModalList";
import AddNFTProjectDetail from "./AddNFTProjectDetail";

interface AddProjectModalProps {
  showModal: boolean;
  hideModalAction: () => void;
}

export default function AddNFTProjectModal({
  showModal,
  hideModalAction,
}: AddProjectModalProps) {
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
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              label="Type the name or Contract Address"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Typography>
          {/* Project list */}
          {/* <AddNFTProjectModalList /> */}
          {/* Project Details */}
          <AddNFTProjectDetail />
          <Box sx={{ textAlign: "center" }}>
            <Button variant="contained" color="primary">
              Add Project
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
