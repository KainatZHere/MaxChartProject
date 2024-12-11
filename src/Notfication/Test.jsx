import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const MyTest = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const hanldeSubmit = () => {
    if (name === "" || password.length < 6) {
      setError(true);
    } else {
      setError(false);
      console.log("Name : ", name);
      console.log("Password : ", password);
      setName("");
      setPassword("");
    }
  };
  console.log(error, "error");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            error={error && name === "" ? true : false}
            placeholder="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            helperText={name === "" ? " enter your Name" : ""}
          />
          <TextField
            error={error && password.length < 6 ? true : false}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            helperText={
              password === ""
                ? "Enter your Password here"
                : password.length < 6
                ? "Password must at least 6 characters long"
                : ""
            }
          />
          <Button variant="contained" onClick={hanldeSubmit}>
            {" "}
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default MyTest;
