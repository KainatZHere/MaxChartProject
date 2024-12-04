import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  IconButton,
} from "@mui/material";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import AddIcon from "@mui/icons-material/Add";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddUserModel from "./AddUserModel";
import UpdateUserModel from "./UpdateUserModel";
import ContactModel from "./ContactModel";

const Home = () => {
  const [age, setAge] = React.useState("");
  const [addUserModelOpen, setAddUserModelOpen] = useState(false);
  const [updateUserModelOpen, setUpdateUserModelOpen] = useState(false);
  const [contactModelOpen, setContactModelOpen] = useState(false);
  const [editRowData, setEditRowData] = useState({});
  const [rows, setRows] = useState([]);
  const [designationList, setDesignationList] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);
  const [rolesList, setRolesList] = useState([]);
  const [contactRowData, setContactRowData] = useState({});

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxMDAwNyIsImV4cCI6MTczMzMxNjAwMywiaXNzIjoiQ29tbXVuaWNhdGlvbkh1Yl9NYXhSZW1pbmQiLCJhdWQiOiJDb21tdW5pY2F0aW9uSHViX1VzZXJzIn0.y6AcWdeYU-4GYmMjCoE_-DcTIWqapDVErRVg6joPaTA";
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleClose = () => {
    setAddUserModelOpen(false);
  };

  const handleCloseUpdateModel = () => {
    setUpdateUserModelOpen(false);
  };

  const handleCloseContactModel = () => {
    setContactModelOpen(false);
  };
  const columns = [
    { field: "userId", headerName: "ID", minWidth: 110, maxWidth: 150 },
    {
      field: "firstName",
      headerName: "Username",
      minWidth: 250,
      maxWidth: 350,
      valueGetter: (value, row) =>
        `${row.firstName || ""}, ${row.lastName || ""}`,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <AccountBoxIcon
              style={{ color: "green", fontSize: "20px" }}
              onClick={() => handleContactModel(params)}
            />
            <span style={{ textDecoration: "underline" }}>{params.value}</span>
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 300,
      maxWidth: 350,
    },
    {
      field: "isActive",
      headerName: "User Status",
      minWidth: 250,
      maxWidth: 350,
      renderCell: (params) => {
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "5vh",
            }}
          >
            <Box
              sx={{
                display: "flex",
                bgcolor: params?.row?.isActive === true ? "green" : "red",
                alignItems: "center",
                width: "80px",
                borderRadius: "30px",
                height: "15px",
                color: "#ffffff",
                p: 1,
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "30px",
                  backgroundColor: "blue",
                  marginLeft: params?.row?.isActive === true ? "5px" : "",
                  marginRight: "7px",
                }}
              >
                {""}
              </div>
              {params?.row?.isActive === true ? "Active" : "InActive"}
            </Box>
          </Box>
        );
      },
    },
    {
      field: "departmentName",
      headerName: "Department",
      minWidth: 250,
      maxWidth: 350,
    },
    {
      field: "role",
      headerName: "Role",
      minWidth: 250,
      maxWidth: 350,
      renderCell: (params) => {
        return (
          <span
            style={{
              fontSize: "12px",
              fontWeight: 500,
              whiteSpace: "none",
              display: "block",
              lineHeight: "1.4",
              overflow: "hidden",
              textOverflow: "ellipsis",
              margin: "2px",
            }}
          >
            {params?.row?.roles.map((items, index) => (
              <div key={index}>
                {items?.roleName}
                {index < params?.row?.roles.length - 1 && <br />}
              </div>
            ))}
          </span>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      minWidth: 250,
      maxWidth: 350,
      renderCell: (params) => {
        return (
          <Box sx={{ display: "flex" }}>
            <IconButton sx={{ p: 0, m: 0 }}>
              <SettingsIcon style={{ fontSize: "20px" }} />
            </IconButton>
            <IconButton sx={{ p: 1, m: 0 }} onClick={() => handleEdit(params)}>
              <BorderColorIcon
                style={{
                  color: "#085f99",
                  fontSize: "20px",
                }}
              />
            </IconButton>
            <IconButton sx={{ p: 0, m: 0 }}>
              <DeleteIcon style={{ color: "red", fontSize: "20px" }} />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const handleEdit = (params) => {
    console.log(params?.row, "edit button");
    setUpdateUserModelOpen(true);
    setEditRowData(params?.row);
  };

  const handleContactModel = (params) => {
    setContactModelOpen(true);
    setContactRowData(params?.row);
    console.log(params, "contact list");
  };

  const getAPIUserData = async () => {
    const resp = await fetch(
      `http://tfs-dgk:8784/api/User/GetUsers?page=1&pageSize=200`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await resp?.json();
    setRows(data?.result);
  };

  const getDesignationListData = async () => {
    const resp = await fetch(
      `http://tfs-dgk:8784/api/User/GetDesignationList?DepertmentId=1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await resp.json();
    setDesignationList(data?.result);
  };

  const getDepartmentListData = async () => {
    const resp = await fetch(`http://tfs-dgk:8784/api/User/GetDepertmentList`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await resp.json();
    setDepartmentList(data?.result);
  };

  const getroleListData = async () => {
    const resp = await fetch(`http://tfs-dgk:8784/api/User/GetRolesList`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await resp.json();
    setRolesList(data?.result);
  };

  useEffect(() => {
    getDesignationListData();
    getDepartmentListData();
    getroleListData();
    getAPIUserData();
  }, []);

  return (
    <>
      <Box
        sx={{
          bgcolor: "#f7faff",
        }}
      >
        {/* First Box */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            bgcolor: "#ffffff",
            height: "5vh",
            border: "1px solid #efefef",
            borderRadius: "3px",
          }}
        >
          {/* LeftBox */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            {["users", "search chat", "call history"].map((item, index) => {
              return (
                <Button
                  key={index}
                  sx={{
                    fontWeight: 600,
                    fontSize: "12px",
                    width: item === "users" ? "18%" : "110px",
                    height: "30px",
                    bgcolor: item === "users" ? "#085f99" : "#d7e5ef",
                    color: item === "users" ? "#ffffff" : "#6b7175",
                  }}
                >
                  {item}
                </Button>
              );
            })}
          </Box>
          {/* Right Box */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              //   width: "80%",
            }}
          >
            <TextField
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                width: "130px",
                height: "35px", // Adjust the height as needed
                bgcolor: "#ffffff",
                color: "#6b7175",
                "& .MuiInputBase-root": {
                  height: "100%",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "8px",
                },
              }}
              placeholder="Search Name"
            />
            {/* Select */}
            <Box sx={{ minWidth: 100 }}>
              <FormControl fullWidth>
                <InputLabel
                  sx={{
                    display: "flex",
                    width: "100%",
                    height: "12px", // Let the height adjust automatically
                    alignItems: "center", // Centers vertically within the InputLabel
                  }}
                >
                  status
                </InputLabel>
                <Box
                  sx={{
                    bgcolor: "#085f99",
                    width: "6px",
                    borderTopLeftRadius: "30px 50px",
                  }}
                >
                  <Select
                    sx={{ height: 35, width: "100px" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Status"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>active</MenuItem>
                    <MenuItem value={20}>inactive</MenuItem>
                  </Select>
                </Box>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 130 }}>
              <FormControl fullWidth>
                <InputLabel
                  sx={{
                    display: "flex",
                    width: "100%",
                    height: "12px", // Let the height adjust automatically
                    alignItems: "center", // Centers vertically within the InputLabel
                  }}
                >
                  Department
                </InputLabel>
                <Box
                  sx={{
                    bgcolor: "#085f99",
                    width: "6px",
                    borderTopLeftRadius: "30px 50px",
                  }}
                >
                  <Select
                    sx={{ height: 35, width: "130px" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Department"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>It</MenuItem>
                    <MenuItem value={20}>Billing</MenuItem>
                  </Select>
                </Box>
              </FormControl>
            </Box>

            {[
              { lable: "Filter", icon: <FilterListOutlinedIcon /> },
              { lable: "Export", icon: <CloudDownloadOutlinedIcon /> },
              { lable: "Add New User", icon: <AddIcon /> },
            ].map((item, index) => {
              return (
                <Button
                  key={index}
                  sx={{
                    border: "1px solid #bec0c4",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: 500,
                    fontSize: "12px",
                    width: item.lable === "Add New User" ? "150px" : "100px",
                    height: "30px",
                    bgcolor:
                      item.lable === "Add New User"
                        ? "#085f99"
                        : item.lable === "Export"
                        ? "#ffffff"
                        : "#d7e5ef",
                    color:
                      item.lable === "Add New User" ? "#ffffff" : "#6b7175",
                  }}
                  startIcon={item.icon}
                  onClick={() =>
                    item.lable === "Add New User"
                      ? setAddUserModelOpen(true)
                      : ""
                  }
                >
                  {item.lable}
                </Button>
              );
            })}
          </Box>
        </Box>

        {/* DataGrid Box */}
        <Box sx={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={rows}
            getRowId={(rows) => rows.userId}
            columns={columns}
            sx={{
              overflow: "hidden",
              bgcolor: "#ffffff",

              "& .MuiDataGrid-row:hover": {
                backgroundColor: "#ECF6FF",
              },

              "& .MuiDataGrid-cell:hover": {
                borderLeft: "1px solid #ffffff",
                borderRight: "1px solid #ffffff",
              },

              "& .MuiDataGrid-columnSeparator": {
                display: "none",
              },

              "& .MuiDataGrid-footerContainer": {
                backgroundColor: "#d7e5ef",
                borderTopLeftRadius: "0px !important",
                borderTopRightRadius: "0px !important",
                color: "#085f99",
                fontWeight: 600,

                "& *": {
                  fontWeight: 600,
                  color: "#085f99", // Color applied to all child elements
                },
              },
              "& .MuiDataGrid-columnHeader": {
                backgroundColor: "#d7e5ef",
                borderTopLeftRadius: "0px !important",
                borderTopRightRadius: "0px !important",
                color: "#085f99",
                fontSize: {
                  xl: "15px",
                  lg: "15px",
                  md: "15px",
                  sm: "13px",
                  xs: "13px",
                },
                "& *": {
                  fontWeight: 600,
                },
                overflow: "hidden",
                ".MuiSvgIcon-root": {
                  color: "#085f99",
                },
              },
              "& .MuiDataGrid-cell": {
                fontSize: "12px !important",
                color: "#1E1D1F !important",
                fontWeight: "500 !important",
                borderTopLeftRadius: "0px !important",
                borderTopRightRadius: "0px !important",
                // justifyContent: "center",
                // textAlign: "center",
              },
            }}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10, 25, 50, 100]}
            // checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Box>

      {addUserModelOpen && (
        <AddUserModel
          getAPIUserData={getAPIUserData}
          addUserModelOpen={addUserModelOpen}
          onClose={handleClose}
          designationList={designationList}
          departmentList={departmentList}
          rolesList={rolesList}
          token={token}
        />
      )}

      {updateUserModelOpen && (
        <UpdateUserModel
          getAPIUserData={getAPIUserData}
          rowData={editRowData}
          updateUserModelOpen={updateUserModelOpen}
          onClose={handleCloseUpdateModel}
          designationList={designationList}
          departmentList={departmentList}
          rolesList={rolesList}
          token={token}
        />
      )}

      {contactModelOpen && (
        <ContactModel
          contactModelOpen={contactModelOpen}
          onClose={handleCloseContactModel}
          contactRowData={contactRowData}
          token={token}
        />
      )}
    </>
  );
};

export default Home;
