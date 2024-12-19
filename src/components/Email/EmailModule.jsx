import {
  Box,
  Grid2,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import { Add } from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/Inbox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SendIcon from "@mui/icons-material/Send";
import EditNoteIcon from "@mui/icons-material/EditNote";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Outlet, useLocation, useNavigate, useParams } from "react-router";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Select from "@mui/material/Select";
import EmailDetailModule from "./EmailDetailModule";
const EmailModule = () => {
  const [emailOption, setEmailOption] = useState(true);
  const [folderOption, setFolderOption] = useState(true);
  const [selectedOption, setSelectedOption] = useState(false);
  const [selectedEmailId, setSelectedEmailId] = useState(470491);
  const [selectedValue, setSelectedValue] = useState("");
  const [rowData, setRowData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isDraftRoute = location.pathname.toLowerCase().includes("draft");
  const isTrashRoute = location.pathname.toLowerCase().includes("trash");

  const EmailData = [
    { Label: "Inbox", icon: <InboxIcon style={{ fontSize: "20px" }} /> },
    { Label: "Send", icon: <SendIcon style={{ fontSize: "20px" }} /> },
    { Label: "Draft", icon: <EditNoteIcon style={{ fontSize: "20px" }} /> },
    {
      Label: "Favourite",
      icon: <StarBorderIcon style={{ fontSize: "20px" }} />,
    },
    {
      Label: "Trash",
      icon: <DeleteOutlineIcon style={{ fontSize: "20px" }} />,
    },
  ];

  const array = [
    "ALi",
    "Waris",
    "Muslim",
    "Umar",
    "Haider",
    "Arslan",
    "Sulman",
    "Kumail",
    "Sameer",
    "Sulman",
    "Kumail",
    "Sameer",
  ];

  const handleEmailToggle = () => {
    setEmailOption((prev) => !prev);
  };

  const handleFolderToggle = () => {
    setFolderOption((prev) => !prev);
  };

  const handleSelection = (lable) => {
    setSelectedOption(lable);
    navigate(lable);
  };
  const handleSelectedEmailId = (id) => {
    setSelectedEmailId(id);
  };

  const handleSelectedValue = (e) => {
    setSelectedValue(e.target.value);
    navigate(e.target.value);
  };

  useEffect(() => {
    // if (rowData && rowData?.length > 0) {
    //   if (!selectedEmailId) {
    //     setSelectedEmailId(rowData[0].emailId);
    //   }
    // }
    const pathParts = location.pathname.split("/");
    const routeLabel = pathParts[pathParts.length - 1];
    setSelectedValue(routeLabel); // Update the selected value to match the route
  }, [location, selectedEmailId]);

  return (
    <>
      <Grid2 container spacing={1} sx={{ bgcolor: "#E2E2E2", p: 1 }}>
        <Grid2
          size={2}
          sx={{
            borderRadius: "10px",
            border: "1px solid #d3d3d3",
            height: "95vh",
            bgcolor: "#ffffff",
            p: 1,
          }}
        >
          {/* New Email Button */}
          <Box
            sx={{
              p: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#C3E7FF",
              borderRadius: "8px",
              gap: 1,
              cursor: "pointer",
            }}
          >
            <Add />
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              New email
            </Typography>
          </Box>
          {/* Second Box */}
          <Box sx={{ mt: "10px" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton onClick={handleEmailToggle}>
                {emailOption ? (
                  <KeyboardArrowUpOutlinedIcon sx={{ color: "#000" }} />
                ) : (
                  <KeyboardArrowDownOutlinedIcon sx={{ color: "#000" }} />
                )}
              </IconButton>

              <Typography
                sx={{
                  fontSize: "14px",
                  ml: "4%",
                  fontWeight: 600,
                }}
              >
                All Emails
              </Typography>
            </Box>
            {emailOption &&
              EmailData.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    ml: "15px",
                    p: 1,
                    bgcolor: item?.Label === selectedOption ? "#C2D7F0" : "",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "#C2D7F0",
                    },
                  }}
                  onClick={() => handleSelection(item?.Label)}
                >
                  <Box>{item?.icon}</Box>
                  <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
                    {item?.Label}
                  </Typography>
                </Box>
              ))}
          </Box>
          {/* Third Box */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton onClick={handleFolderToggle}>
                {folderOption ? (
                  <KeyboardArrowUpOutlinedIcon sx={{ color: "#000" }} />
                ) : (
                  <KeyboardArrowDownOutlinedIcon sx={{ color: "#000" }} />
                )}
              </IconButton>

              <Typography
                sx={{
                  fontSize: "14px",
                  ml: "4%",
                  fontWeight: 600,
                }}
              >
                All Folders
              </Typography>
            </Box>
            {folderOption && (
              <Box
                sx={{
                  height: "300px",
                  overflow: "auto",
                  "&::-webkit-scrollbar": {
                    width: "6px", // Adjust width of scrollbar
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#d3d3d3", // Color of the scrollbar thumb
                    borderRadius: "10px", // Round corners for the scrollbar thumb
                    "&:hover": {
                      backgroundColor: "#efefef", // Darker color when hovered
                    },
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "#333", // Color of the track behind the scrollbar
                    borderRadius: "10px",
                  },
                }}
              >
                {array.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,

                      ml: "15px",
                      p: 1,
                      bgcolor: item === selectedOption ? "#C2D7F0" : "",
                      cursor: "pointer",
                      "&:hover": {
                        bgcolor: "#C2D7F0",
                      },
                    }}
                    onClick={() => setSelectedOption(item)}
                  >
                    <FolderOpenIcon style={{ fontSize: "20px" }} />
                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
          {/* Create New Folder */}
          <Box sx={{ p: 1 }}>
            <Typography
              sx={{
                fontSize: "16px",
                ml: "10px",
                fontWeight: 600,
                color: "#085b93",
              }}
            >
              Create new Folder
            </Typography>
          </Box>
        </Grid2>
        {/* Second grid */}
        <Grid2
          size={isDraftRoute || isTrashRoute ? 10 : 3}
          sx={{
            borderRadius: "10px",
            border: "1px solid #d3d3d3",
            height: "95vh",
            bgcolor: isDraftRoute || isTrashRoute ? "#efefef" : "#ffffff",
            p: 1,
          }}
        >
          <Box
            sx={{
              display: isDraftRoute || isTrashRoute ? "none" : "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              All Mails
              <ArrowDropDownIcon />
            </Typography>
            <CalendarMonthIcon />
          </Box>
          {/*Heading Box for Draft and Trash */}
          <Box
            sx={{
              display: isDraftRoute || isTrashRoute ? "flex" : "none",
              alignItems: "center",
              gap: 1,
              p: 1,
              bgcolor: "#ffffff",
            }}
          >
            {isDraftRoute ? (
              <EditNoteIcon style={{ fontSize: "24px" }} />
            ) : (
              <DeleteOutlineIcon />
            )}
            <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
              {isDraftRoute ? "Draft" : "Trash"}
            </Typography>
          </Box>
          {/* Search Box */}
          <Box
            sx={{
              height: "6vh",
              alignItems: "center",
              justifyContent:
                isDraftRoute || isTrashRoute ? "space-between" : "center",
              display: "flex",
              bgcolor: "#ffffff",
              px: isDraftRoute || isTrashRoute ? 1 : "",
              // width: "100%",
              borderBottom: isTrashRoute ? "1px solid #d3d3d3" : "",
            }}
          >
            <TextField
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                width: "55vh",
                height: "35px",
                color: "#6b7175",
                "& .MuiInputBase-root": {
                  height: "100%",
                  bgcolor: "#efefef",
                  borderRadius: "40px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "40px",
                },
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon style={{ color: "#000" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <FormControl
                      sx={{
                        // m: 1,
                        minWidth: 80,
                        height: "33px",
                        pl: "7%",
                        borderLeft: "2px solid grey",
                      }}
                    >
                      <Select
                        sx={{
                          border: "transparent",
                          borderColor: "Background",
                          fontSize: "13px",
                        }}
                        autoWidth
                        variant="standard"
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={selectedValue}
                        onChange={handleSelectedValue}
                      >
                        {EmailData.map((item, index) => (
                          <MenuItem key={index} value={item?.Label}>
                            {item?.Label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    // <Box
                    //   sx={{
                    //     height: "4vh",
                    //     display: "flex",
                    //     // justifyContent: "space-between",
                    //     alignItems: "center",

                    //   }}
                    // >
                    //   <Typography>Inbox</Typography>
                    //   <IconButton>
                    //     <ArrowDropDownIcon />
                    //   </IconButton>
                    // </Box>
                  ),
                },
              }}
              placeholder="Search mail"
            />
            {isDraftRoute ? (
              <Button
                sx={{
                  bgcolor: "#efefef",
                  color: "red",
                  borderRadius: "15px",
                  width: "120px",
                  height: "40px",
                  border: "1px solid #d3d3d3",
                  fontSize: "12px",
                }}
                startIcon={<DeleteOutlineIcon style={{ fontSize: "18px" }} />}
              >
                Delete
              </Button>
            ) : isTrashRoute ? (
              <Box
                sx={{
                  display: "flex",
                  borderRadius: "15px",
                  border: "1px solid #d3d3d3",
                  // width: "40%",
                  bgcolor: "#efefef",
                  height: "40px",
                }}
              >
                <Button
                  sx={{
                    color: "red",
                    width: "140px",
                    fontSize: "12px",
                    textTransform: "none",
                    borderRight: "2px solid #d3d3d3",
                    borderRadius: "0px",
                  }}
                  startIcon={<DeleteOutlineIcon style={{ fontSize: "18px" }} />}
                >
                  Delete Forever
                </Button>
                <Button
                  sx={{
                    color: "#000",
                    width: "100px",
                    fontSize: "12px",
                    textTransform: "none",
                    borderRight: "2px solid #d3d3d3",
                    borderRadius: "0px",
                  }}
                  startIcon={<RestartAltIcon style={{ fontSize: "18px" }} />}
                >
                  Restore
                </Button>

                <Button
                  sx={{
                    color: "#000",
                    width: "110px",
                    fontSize: "12px",
                    textTransform: "none",
                  }}
                  startIcon={<RestartAltIcon style={{ fontSize: "18px" }} />}
                >
                  Restore All
                </Button>
              </Box>
            ) : (
              ""
            )}
          </Box>

          {isHomePage ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "60vh",
                width: "100%",
              }}
            >
              <DraftsOutlinedIcon style={{ fontSize: "30px" }} />
              <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                Select an item to read
              </Typography>
            </Box>
          ) : (
            <Outlet context={{ setRowData, handleSelectedEmailId }} />
          )}
        </Grid2>
        {/* Third Grid */}
        <Grid2
          size={isDraftRoute || isTrashRoute ? 0 : 7}
          sx={{
            borderRadius: "10px",
            border: "1px solid #d3d3d3",
            height: "95vh",
            display: isDraftRoute || isTrashRoute ? "none" : "flex",
            flexDirection: "column",
            bgcolor: "#ffffff",
          }}
        >
          {isHomePage ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "60vh",
                width: "100%",
              }}
            >
              <DraftsOutlinedIcon style={{ fontSize: "30px" }} />
              <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                Select an item to read
              </Typography>
            </Box>
          ) : (
            selectedEmailId && <EmailDetailModule emailId={selectedEmailId} />
          )}
        </Grid2>
      </Grid2>
    </>
  );
};

export default EmailModule;
