import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import { NFTProject } from "@/types/NFTProject";
import { useDashboardData } from "@/app/hooks/useDashboardData";
import { useState } from "react";

interface NFTProjectListItemProps {
  project: NFTProject;
}

export default function NFTProjectListItem({
  project,
}: NFTProjectListItemProps) {
  const { handleDelete } = useDashboardData();
  const [showDialog, setShowDialog] = useState(false);

  return (
    <Box>
      <Grid container spacing={2}>
        <Box>
          <IconButton sx={{ color: "grey" }}></IconButton>
        </Box>
        <Grid item xs={3}>
          <Box>
            <img src={project.thumb} style={{ width: 64 }} />
          </Box>
        </Grid>
        <Grid item xs={3}>
          {project.name}
          {project.fav && <StarIcon sx={{ color: "gold" }} />}
        </Grid>
        <Grid item xs={3}>
          <Box>$1234.23</Box>
        </Grid>
        <Grid item xs={2}>
          <IconButton
            sx={{ color: "carbon" }}
            onClick={() => setShowDialog(true)}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Dialog
        open={showDialog}
        onClose={setShowDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete this item?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action cannot be undone
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDialog(false)}>Cancel</Button>
          <Button
            onClick={() => {
              handleDelete(project.id);
              setShowDialog(false);
            }}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
