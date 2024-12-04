import React, { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Box,
  Button,
  FormHelperText,
  IconButton,
  OutlinedInput,
  TextField,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@mui/material/MenuItem";
import { UserContext } from "../Context/UserConetxt";

const AddUserModel = ({
  getAPIUserData,
  addUserModelOpen,
  onClose,
  designationList,
  departmentList,
  rolesList,
  token,
}) => {
  const [validationError, setValidationError] = useState(false);
  const [userFormData, setUserFormData] = useState({
    firstName: "",
    lastName: "",
    designationId: "",
    departmentId: "",
    status: true,
    email: "",
    password: "",
    roles: [],
  });
  const outerTheme = useTheme();
  const { setSnackbarOpen, setAlertMessage } = useContext(UserContext);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 550,
    height: 500,
    borderRadius: "8px",
    bgcolor: "white",
    boxShadow: 24,
  };

  const textfieldStyle = {
    height: "30px",
    width: "250px",
    borderRadius: "8px",

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "1px solid #085f99", // Removing default border
      },
      "&:hover fieldset": {
        borderColor: "#085f99", // Change this to your hover color
      },
      // Border color on focus
      "&.Mui-focused fieldset": {
        borderColor: "#085f99", // Change this to your focus color
      },
    },
    "& .MuiFormHelperText-root": {
      margin: 0,
      padding: 0,
      color: "#085f99", // Change the color of helper text
      fontSize: "11px", // Change the font size
      fontWeight: 500,
    },
  };

  const selectTextfieldStyle = {
    width: 250,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "1px solid #085f99", // Removing default border
      },
      "&:hover fieldset": {
        borderColor: "#085f99", // Change this to your hover color
      },
      // Border color on focus
      "&.Mui-focused fieldset": {
        borderColor: "#085f99", // Change this to your focus color
      },
    },
    "& .MuiFormHelperText-root": {
      margin: 0,
      padding: 0,
      color: "#FF0000 ", // Change the color of helper text
      fontSize: "11px", // Change the font size
      fontWeight: 400,
    },
  };

  const resetForm = () => {
    onClose();
    setUserFormData({});
  };

  const addUserAPIData = async () => {
    debugger;
    const resp = await fetch(`http://tfs-dgk:8784/api/User/AddUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        firstName: userFormData?.firstName,
        lastName: userFormData?.lastName,
        email: userFormData?.email,
        password: userFormData?.password,
        designationId: userFormData?.designationId,
        departmentId: userFormData?.departmentId,
        createdBy: 1,
        isActive: userFormData?.status,
        userRoles: userFormData?.roles.map((item) => {
          return { roleId: item?.roleId };
        }),
      }),
    });

    const data = await resp.json();
    if (data?.message === "Add Successfully") {
      setSnackbarOpen(true);
      setAlertMessage("User Added Successfully");
    }
    getAPIUserData();
    resetForm();
  };

  const handleAddUser = () => {
    if (
      userFormData?.email === "" ||
      userFormData?.password?.length < 6 ||
      userFormData?.firstName === "" ||
      userFormData.lastName === "" ||
      userFormData?.designationId === "" ||
      userFormData?.departmentId === ""
    ) {
      setValidationError(true);
    } else {
      setValidationError(false);
      addUserAPIData();
    }
  };
  return (
    <>
      <Modal open={addUserModelOpen}>
        <Box sx={style}>
          {/* heading */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "6vh",
              borderBottom: "1px solid grey",
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
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#085f99",
                  // flexGrow: 1,
                }}
              >
                Add a new user
              </Typography>
            </div>
            <IconButton onClick={onClose}>
              <HighlightOffIcon
                style={{ color: "#085f99", fontSize: "18px" }}
              />
            </IconButton>
          </Box>
          {/* TextField */}
          <Box sx={{ p: 2 }}>
            {/* first Div */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "14px", fontWeight: 500 }}>
                  First Name: <span style={{ color: "red" }}>*</span>
                </label>
                <TextField
                  error={validationError && userFormData?.firstName === ""}
                  value={userFormData?.firstName || ""}
                  onChange={(e) =>
                    setUserFormData({
                      ...userFormData,
                      firstName: e.target.value,
                    })
                  }
                  sx={textfieldStyle}
                  size="small"
                  helperText={
                    validationError && userFormData?.firstName === ""
                      ? "FirstName is required!"
                      : ""
                  }
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "14px", fontWeight: 500 }}>
                  Last Name: <span style={{ color: "red" }}>*</span>
                </label>
                <TextField
                  error={validationError && userFormData?.lastName === ""}
                  value={userFormData.lastName || ""}
                  onChange={(e) =>
                    setUserFormData({
                      ...userFormData,
                      lastName: e.target.value,
                    })
                  }
                  sx={textfieldStyle}
                  size="small"
                  helperText={
                    validationError && userFormData?.lastName === ""
                      ? "LastName is required!"
                      : // : validationError && userFormData?.lastName?.length < 6
                        // ? "Lastname must be at least 6 characters long"
                        ""
                  }
                />
              </Box>
            </div>
            {/* second div */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "6%",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "14px", fontWeight: 500 }}>
                  Email: <span style={{ color: "red" }}>*</span>
                </label>
                <TextField
                  error={
                    (validationError && userFormData.email === "") ||
                    (validationError &&
                      !/\S+@\S+\.\S+/.test(userFormData?.email))
                  }
                  value={userFormData.email || ""}
                  onChange={(e) =>
                    setUserFormData({
                      ...userFormData,
                      email: e.target.value,
                    })
                  }
                  sx={textfieldStyle}
                  size="small"
                  helperText={
                    validationError && userFormData.email === ""
                      ? "Email is required!"
                      : validationError &&
                        !/\S+@\S+\.\S+/.test(userFormData?.email)
                      ? "Please enter a valid email."
                      : ""
                  }
                />
              </Box>

              <ThemeProvider theme={customTheme(outerTheme)}>
                <FormControl sx={{ width: 250 }} variant="outlined">
                  <label style={{ fontSize: "14px", fontWeight: 500 }}>
                    Password: <span style={{ color: "red" }}>*</span>
                  </label>
                  <OutlinedInput
                    error={
                      validationError && userFormData?.password?.length < 6
                    }
                    value={userFormData.password || ""}
                    onChange={(e) =>
                      setUserFormData({
                        ...userFormData,
                        password: e.target.value,
                      })
                    }
                    sx={{
                      height: "40px",
                    }}
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    // label="Password"
                  />
                  <FormHelperText
                    error={
                      validationError && userFormData?.password?.length < 6
                    }
                    sx={{
                      margin: 0,
                      padding: 0,
                      color: "#085f99", // Change the color of helper text
                      fontSize: "11px", // Change the font size
                      fontWeight: 500,
                    }}
                  >
                    {validationError && userFormData?.password === ""
                      ? "Strong password is required"
                      : validationError && userFormData?.password?.length < 6
                      ? "Password must be 6 characters long"
                      : ""}
                  </FormHelperText>
                </FormControl>
              </ThemeProvider>
            </div>
            {/* Third Div */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "14px", fontWeight: 500 }}>
                  Department: <span style={{ color: "red" }}>*</span>
                </label>
                <TextField
                  error={validationError && userFormData?.departmentId === ""}
                  onChange={(e) => {
                    setUserFormData({
                      ...userFormData,
                      departmentId: e.target.value,
                    });
                  }}
                  value={userFormData?.departmentId || ""}
                  select
                  size="small"
                  sx={selectTextfieldStyle}
                  helperText={
                    validationError && userFormData?.departmentId === ""
                      ? "Select Department"
                      : ""
                  }
                >
                  {departmentList.map((item, index) => (
                    <MenuItem key={index} value={item?.departmentId}>
                      {item?.departmentName}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "14px", fontWeight: 500 }}>
                  Designation: <span style={{ color: "red" }}>*</span>
                </label>
                <TextField
                  error={validationError && userFormData?.designationId === ""}
                  helperText={
                    validationError && userFormData?.designationId === ""
                      ? "Select Designation"
                      : ""
                  }
                  onChange={(e) => {
                    setUserFormData({
                      ...userFormData,
                      designationId: e.target.value,
                    });
                  }}
                  value={userFormData?.designationId || ""}
                  select
                  size="small"
                  sx={selectTextfieldStyle}
                >
                  {designationList.map((item, index) => (
                    <MenuItem key={index} value={item?.designationId}>
                      {item?.designationName}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </div>
            {/* Fourth Div */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "14px", fontWeight: 500 }}>
                  Role: <span style={{ color: "red" }}>*</span>
                </label>
                <Autocomplete
                  multiple
                  value={userFormData?.roles}
                  onChange={(_, selectedOption) => {
                    setUserFormData({
                      ...userFormData,
                      roles: selectedOption,
                    });
                  }}
                  options={rolesList}
                  getOptionLabel={(options) => options?.roleName}
                  sx={{ width: 250 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="small"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "1px solid #085f99", // Removing default border
                          },
                          "&:hover fieldset": {
                            borderColor: "#085f99", // Change this to your hover color
                          },
                          // Border color on focus
                          "&.Mui-focused fieldset": {
                            borderColor: "#085f99", // Change this to your focus color
                          },
                        },
                      }}
                    />
                  )}
                />
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "14px", fontWeight: 500 }}>
                  Status: <span style={{ color: "red" }}>*</span>
                </label>
                <TextField
                  onChange={(e) => {
                    setUserFormData({
                      ...userFormData,
                      status: e.target.value,
                    });
                  }}
                  value={userFormData?.status}
                  select
                  size="small"
                  sx={selectTextfieldStyle}
                >
                  {[
                    { label: "Active", value: true },
                    { label: "InActive", value: false },
                  ].map((item, index) => (
                    <MenuItem key={index} value={item?.value}>
                      {item?.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </div>
            {/* Button Box */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "4vh",
                mt: "6%",
              }}
            >
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    width: "90px",
                    height: "35px",
                    fontSize: "14px",
                    fontWeight: 500,
                    borderRadius: "8px",
                    bgcolor: "#bababa",
                    color: "white",
                  }}
                  onClick={resetForm}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    width: "100px",
                    height: "35px",
                    fontSize: "12px",
                    fontWeight: 500,
                    borderRadius: "8px",
                    bgcolor: "#085f99",
                    color: "white",
                  }}
                  onClick={handleAddUser}
                >
                  Add User
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "#085f99",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "#085f99",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "#085f99",
            },
          },
        },
      },
    },
  });
export default AddUserModel;
