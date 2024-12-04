import React, { useEffect, useState } from "react";
import { UserContext } from "./UserConetxt";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const AlertProvider = (props) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const handleClose = (event, reason) => {
    // if (reason === "clickaway") {
    //   return;
    // }

    setSnackbarOpen(true);
  };

  useEffect(() => {
    if (snackbarOpen === true) {
      setTimeout(() => {
        setSnackbarOpen(false);
      }, 3000);
    }
  });

  return (
    <>
      <Snackbar
        open={snackbarOpen}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>

      <UserContext.Provider
        value={{ snackbarOpen, setSnackbarOpen, setAlertMessage }}
      >
        {props.children}
      </UserContext.Provider>
    </>
  );
};

export default AlertProvider;
