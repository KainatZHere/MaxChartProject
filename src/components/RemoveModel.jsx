import * as React from "react";
import Modal from "@mui/material/Modal";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { IconButton, Typography, Box, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
};

const RemoveModel = ({ handleClose, removeModel, username, handleOnYes }) => {
  return (
    <>
      <Modal open={removeModel} onClose={handleClose}>
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "4vh",
              borderBottom: "1px solid #D3D3D3",
              p: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#085f99",
                  fontFamily: "poppins",
                  // flexGrow: 1,
                }}
              >
                Remove User
              </Typography>
            </div>
            <IconButton onClick={handleClose}>
              <HighlightOffIcon
                style={{ color: "#085f99", fontSize: "18px" }}
              />
            </IconButton>
          </Box>
          <Box
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "poppins",
                color: "#000",
              }}
            >
              Are you sure want to Remove this user?
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                fontFamily: "poppins",
                color: "#085f99",
              }}
            >
              {username.firstName} {username.lastName}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              alignItems: "center",
              p: 2,
            }}
          >
            <Button
              sx={{
                textTransform: "none",
                color: "#ffffff",
                bgcolor: "#A9A9A9",
                fontSize: "12px",
                fontWeight: 500,
                width: "70px",
                height: "30px",
                borderRadius: "6px",
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              sx={{
                textTransform: "none",
                color: "#ffffff",
                bgcolor: "#085f99",
                fontSize: "12px",
                fontWeight: 500,
                width: "70px",
                height: "30px",
                borderRadius: "6px",
              }}
              onClick={handleOnYes}
            >
              Yes
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default RemoveModel;
