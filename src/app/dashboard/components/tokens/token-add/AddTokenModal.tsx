import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import useAgregatorData from "@/app/hooks/useAgreggatorData";
import { useEffect, useState } from "react";
import { useDashboardData } from "@/app/hooks/useDashboardData";
import { Token } from "@/types/Token";
import AddTokenModalList from "./AddTokenModalList";
import { useTokenStore } from "@/app/store/tokensStore";
import AddTokenDetail from "./AddTokenDetail";

interface AddTokenModalProps {
  showModal: boolean;
  hideModalAction: () => void;
}

export default function AddTokenModal({
  showModal,
  hideModalAction,
}: AddTokenModalProps) {
  const tokens = useTokenStore((state) => state.tokens);
  const setTokens = useTokenStore((state) => state.setTokens);
  const { handleAddToken } = useDashboardData();
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
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
    if (selectedToken) {
      setTokens([]);
      setQuery("");
    }
  }, [selectedToken]);

  useEffect(() => {
    if (query !== "") {
      setSelectedToken(null);
    }
  }, [query]);

  useEffect(() => {
    if (showModal) {
      setTokens([]);
      setSelectedToken(null);
    }
  }, [showModal]);

  useEffect(() => {
    const newData: Token | null = selectedToken;
    if (newData) {
      if (newData) {
        newData.fav = favorite;
      }
      setSelectedToken(newData);
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
              Add Token
              <IconButton
                aria-label="close"
                onClick={hideModalAction}
                sx={{
                  marginLeft: "310px",
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

          {/* Token list */}
          {tokens.length > 0 && (
            <AddTokenModalList
              projects={tokens}
              selectAction={(project: Token) => setSelectedToken(project)}
            />
          )}

          {/* Project Details */}
          {tokens.length === 0 && (
            <Box sx={{ height: "200px", paddingTop: 1 }}>
              {selectedToken && (
                <AddTokenDetail
                  project={selectedToken}
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
              disabled={true}
              // onClick={() => {
              //   handleAdd(selectedToken);
              //   hideModalAction();
              // }}
            >
              Add Token (not implemented)
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
