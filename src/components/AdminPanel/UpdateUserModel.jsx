import React, { useContext, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box, Button, IconButton, TextField } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@mui/material/MenuItem";
import { UserContext } from "../Context/UserConetxt";

const UpdateUserModel = ({
  getAPIUserData,
  updateUserModelOpen,
  onClose,
  rowData,
  designationList,
  departmentList,
  rolesList,
  token,
}) => {
  const { setSnackbarOpen, setAlertMessage } = useContext(UserContext);
  const [validationError, setValidationError] = useState(false);
  const [userFormData, setUserFormData] = useState({
    userId: rowData?.userId,
    firstName: rowData?.firstName,
    lastName: rowData?.lastName,
    designation: rowData?.designationName,
    designationId: rowData?.designationId,
    department: rowData?.departmentName,
    departmentId: rowData?.departmentId,
    status: rowData?.isActive === true ? "Active" : "InActive",
    email: rowData?.email,
    roles: rowData?.roles?.map((item) => item),
  });
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
      color:
        validationError && userFormData?.departmentId === ""
          ? "#FF0000"
          : validationError && userFormData?.designationId === ""
          ? "#FF0000"
          : "#085f99",
      fontSize: "11px", // Change the font size
      fontWeight: 400,
    },
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

  const updateUserAPiData = async () => {
    const formData = new FormData();
    formData.append("userId", userFormData?.userId);
    formData.append("email", userFormData?.email);
    formData.append("departmentName", userFormData?.department);
    formData.append("departmentId", userFormData?.departmentId);
    formData.append("designationId", userFormData?.designationId);
    formData.append("designation", userFormData?.designation);
    formData.append("lastName", userFormData?.lastName);
    formData.append("firstName", userFormData?.firstName);
    formData.append(
      "isActive",
      userFormData?.status === "Active" ? true : false
    );

    userFormData?.roles?.forEach((items, index) => {
      formData.append(`UserRoles[${index}].RoleId`, items?.roleId);
    });
    const resp = await fetch(`http://tfs-dgk:8784/api/User/UpdateUser`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    const data = await resp.json();
    if (data?.message === "User Updated Successfully") {
      setSnackbarOpen(true);
      setAlertMessage("User Updated Successfully");
    }
    getAPIUserData("", "", 0);
    resetForm();
  };

  const handleUpdateUser = () => {
    if (
      userFormData?.email === "" ||
      userFormData?.password?.length < 6 ||
      userFormData?.firstName === "" ||
      userFormData.lastName === "" ||
      userFormData?.designationId === "" ||
      userFormData?.departmentId === "" ||
      userFormData?.roles == ""
    ) {
      setValidationError(true);
    } else {
      setValidationError(false);
      updateUserAPiData();
    }
  };

  const resetForm = () => {
    onClose();
    setUserFormData({});
  };

  return (
    <>
      <Modal open={updateUserModelOpen}>
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
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#085f99",
                  // flexGrow: 1,
                }}
              >
                Update User
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
                  onChange={(e) => {
                    setUserFormData({
                      ...userFormData,
                      firstName: e.target.value,
                    });
                  }}
                  value={userFormData?.firstName}
                  sx={textfieldStyle}
                  size="small"
                  helperText={
                    userFormData?.firstName === ""
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
                  onChange={(e) =>
                    setUserFormData({
                      ...userFormData,
                      lastName: e.target.value,
                    })
                  }
                  value={userFormData?.lastName}
                  sx={textfieldStyle}
                  size="small"
                  helperText={
                    userFormData?.lastName === "" ? "Lastname is required!" : ""
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
                  onChange={(e) =>
                    setUserFormData({
                      ...userFormData,
                      email: e.target.value,
                    })
                  }
                  value={userFormData?.email}
                  sx={textfieldStyle}
                  size="small"
                  helperText={
                    userFormData.email === ""
                      ? "Email is required!"
                      : !/\S+@\S+\.\S+/.test(userFormData?.email)
                      ? "Please enter a valid email."
                      : ""
                  }
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "14px", fontWeight: 500 }}>
                  Designation: <span style={{ color: "red" }}>*</span>
                </label>
                <TextField
                  error={validationError && userFormData?.designationId === ""}
                  helperText={
                    userFormData?.designationId === ""
                      ? "Select Designation"
                      : ""
                  }
                  onChange={(e, selectedDesignation) => {
                    setUserFormData({
                      ...userFormData,
                      designationId: e.target.value,
                      designation: selectedDesignation?.props?.children, // Set the designation name
                    });
                  }}
                  value={userFormData?.designationId || ""}
                  select
                  size="small"
                  sx={selectTextfieldStyle}
                >
                  <MenuItem value="">None</MenuItem>
                  {designationList.map((item, index) => (
                    <MenuItem key={index} value={item?.designationId}>
                      {item?.designationName}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
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
                  helperText={
                    userFormData?.departmentId === "" ? "Select Department" : ""
                  }
                  onChange={(e, selectedDepartment) => {
                    setUserFormData({
                      ...userFormData,
                      departmentId: e.target.value,
                      department: selectedDepartment?.props?.children, // Set the designation name
                    });
                  }}
                  value={userFormData?.departmentId || ""}
                  select
                  size="small"
                  sx={selectTextfieldStyle}
                >
                  <MenuItem value="">None</MenuItem>
                  {departmentList.map((item, index) => (
                    <MenuItem key={index} value={item?.departmentId}>
                      {item?.departmentName}
                    </MenuItem>
                  ))}
                </TextField>
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
                  value={userFormData?.status || ""}
                  select
                  size="small"
                  sx={{
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
                  }}
                >
                  {["Active", "InActive"].map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {option}
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
                  onChange={(_, selectedOption) => {
                    setUserFormData({
                      ...userFormData,
                      roles: selectedOption,
                    });
                  }}
                  value={userFormData?.roles}
                  options={rolesList}
                  getOptionLabel={(options) => options?.roleName || ""}
                  sx={{ width: 250 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="small"
                      error={validationError && userFormData?.roles == ""}
                      helperText={
                        userFormData?.roles == ""
                          ? "Select at least one role"
                          : ""
                      }
                      sx={{
                        // height: "30px",
                        "& .MuiFormHelperText-root": {
                          margin: 0,
                          padding: 0,
                          color:
                            validationError && userFormData?.roles == ""
                              ? "#FF0000"
                              : "#085f99",
                          fontSize: "11px", // Change the font size
                          fontWeight: 400,
                        },
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
                  onClick={handleUpdateUser}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default UpdateUserModel;
