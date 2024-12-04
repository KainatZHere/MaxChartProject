import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box, Button, IconButton, TextField } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Avatar from "@mui/material/Avatar";
import avator1 from "../assets/avator1.png";
import avator2 from "../assets/avator2.jpg";
import InputAdornment from "@mui/material/InputAdornment";
import { Search } from "@mui/icons-material";

const ContactModel = ({ contactModelOpen, onClose, contactRowData, token }) => {
  const [rows, setRows] = useState([]);
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
  const userId = contactRowData?.userId;

  const getContactUserListData = async (id) => {
    const resp = await fetch(
      `http://tfs-dgk:8784/api/User/GetUserContacts?UserId=${id}`,
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

  const handleBlock = (ContactId) => {
    setRows((prevUser) =>
      prevUser.map((user) =>
        user?.userContactId === ContactId ? { ...user, isBlock: true } : user
      )
    );
  };

  useEffect(() => {
    getContactUserListData(userId);
  }, [userId]);

  return (
    <>
      <Modal open={contactModelOpen}>
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
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#085f99",
                  // flexGrow: 1,
                }}
              >
                Contacts
              </Typography>
            </div>
            <IconButton onClick={onClose}>
              <HighlightOffIcon
                style={{ color: "#085f99", fontSize: "18px" }}
              />
            </IconButton>
          </Box>
          {/* Search TextField */}
          <Box sx={{ p: 2 }}>
            <TextField
              fullWidth
              sx={{ bgcolor: "#f7f1ff" }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search style={{ color: "#000" }} />
                    </InputAdornment>
                  ),
                },
              }}
              placeholder="Search People"
              variant="standard"
            />
            <Box
              sx={{
                height: "39vh",
                overflow: "auto",
                "&::-webkit-scrollbar": {
                  width: "4px", // Decrease the width of the scrollbar
                },
                "&::-webkit-scrollbar-track": {
                  background: "#f1f1f1", // Track color (optional)
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#888", // Scrollbar thumb color
                  borderRadius: "10px", // Rounded corners for thumb
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#555", // Darker thumb color on hover
                },
              }}
            >
              {rows.length < 1 ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    marginTop: "20px",
                  }}
                >
                  <h2>No Contact List</h2>
                </div>
              ) : (
                rows?.map((items, index) => {
                  console.log(items?.profilePic, "picture");
                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        // width: "100%",
                        justifyContent: "space-between",
                        height: "50px",
                        alignItems: "center",
                        padding: 4,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          alignItems: "center",
                        }}
                      >
                        <Avatar
                          alt={`${items?.firstName} ${items?.lastName}`} // Set the alt text as the full name
                          src={items?.profilePic}
                          sx={{ width: 40, height: 40 }}
                        />
                        <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                          {items?.firstName} {items?.lastName}
                        </Typography>
                      </Box>
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
                            bgcolor: items.isBlock ? "grey" : "red",
                            color: "white",
                          }}
                          onClick={() => handleBlock(items?.userContactId)}
                          disabled={items?.isBlock}
                        >
                          {items?.isBlock ? "Blocked" : "Block"}
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
                          // onClick={onClose}
                        >
                          Remove
                        </Button>
                      </Box>
                    </div>
                  );
                })
              )}
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ContactModel;
