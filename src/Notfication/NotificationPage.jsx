import { Box, Button } from "@mui/material";
import React from "react";
import addNotification from "react-push-notification";
import logo from "../../assets/avator2.jpg";

const NotificationPage = () => {
  const handleNotificationButton = () => {
    addNotification({
      title: "Skype",
      subtitle: "This message from Skype App",
      message:
        "Skype is very Fast web App and provide us different features so that we caan communicate with People",
      theme: "darkblue",
      duration: 4000,
      native: true,
      vibrate: 3,
      icon: logo,
      position: "top-right",
      onClick: () => {
        window.location =
          "https://www.npmjs.com/package/react-push-notification";
      },
    });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "20vh",
          gap: 2,
        }}
      >
        <h4> Click button for notification push </h4>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleNotificationButton}
        >
          Click me
        </Button>
      </Box>
    </>
  );
};

export default NotificationPage;
