import { Token } from "@/types/Token";
import { Box, Grid, Link } from "@mui/material";

interface AddTokenModalListItemProps {
  project: Token;
  selectAction: (project: Token) => void;
}

export default function AddTokenModalListItem({
  project,
  selectAction,
}: AddTokenModalListItemProps) {
  return (
    <Box sx={{}}>
      <Link
        variant="body1"
        sx={{
          textDecoration: "none",
          color: "grey",
          cursor: "pointer",
          ":hover": { color: "black" },
        }}
        onClick={() => selectAction(project)}
      >
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <Box>
              <img
                src={project.thumb}
                alt={project.name}
                style={{ width: "28px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={10}>
            {project.name} (${project.price})
          </Grid>
        </Grid>
      </Link>
    </Box>
  );
}
