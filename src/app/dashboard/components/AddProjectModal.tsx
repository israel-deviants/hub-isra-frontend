import Checkbox from "@mui/material/Checkbox";
import {
  Modal,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Button,
} from "@mui/material";

interface AddProjectModalProps {
  showModal: boolean;
}

export default function AddProjectModal({ showModal }: AddProjectModalProps) {
  return (
    <Modal
      open={showModal}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Box sx={{ width: "500px", height: "400px", background: "white" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Project
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField label="Enter text" variant="outlined" />
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Add to Favorites"
            />
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Add Project
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
