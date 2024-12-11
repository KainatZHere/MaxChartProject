import React from "react";
import MyHeader from "./MyHeader";
import { Outlet, useNavigate } from "react-router";
import { Box, Button } from "@mui/material";
import addNotification from "react-push-notification";
import logo from "../../assets/avator2.jpg";

const MyHome = () => {
  const navigate = useNavigate();

  const handleNotificationButton = () => {
    addNotification({
      title: "Notification",
      subtitle: "This message from chrome Web browser",
      message:
        "react-push-notification is a librery used to  Show notification ",
      theme: "red",
      duration: 4000,
      native: true,
      icon: logo,
      onClick: () => {
        navigate("/contact");
      },
    });
  };

  return (
    <>
      <MyHeader />
      <Outlet />
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

export default MyHome;
