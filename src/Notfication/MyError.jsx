import { Box } from "@mui/material";
import React from "react";

const MyError = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <h1>Page Not Found</h1>
      </Box>
    </>
  );
};

export default MyError;
