import { Box, Grid2, IconButton, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Avatar from "@mui/material/Avatar";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import { UserContext } from "../../Context/UserConetxt";
import dayjs from "dayjs";

const EmailDetailModule = ({ emailId }) => {
  const { token } = useContext(UserContext);
  const [rows, setRows] = useState([]);

  const stripHtmlTags = (html) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };

  const getInboxDataByEmailId = async (emailId) => {
    const resp = await fetch(
      `http://tfs-dgk:8784/api/Email/GetEmailDetail?EmailId=${emailId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          auhorization: `Bearer${token}`,
        },
      }
    );
    const data = await resp?.json();
    setRows(data?.result);
  };

  useEffect(() => {
    getInboxDataByEmailId(emailId);
  }, [emailId]);

  return (
    <>
      <Grid2 container sx={{ p: 1 }}>
        {rows.map((item, index) => (
          <div key={index} style={{ width: "100%" }}>
            <Box sx={{ display: "flex", p: 1, gap: 2 }}>
              <Avatar>{item?.profilePicPath}</Avatar>
              <Box sx={{ width: "90%" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                    {item?.firstName} {item?.lastName}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <KeyboardArrowLeftIcon
                      style={{ fontSize: "16px", margin: 0, padding: 0 }}
                    />
                    {item?.email}
                    <KeyboardArrowRightIcon
                      style={{ fontSize: "16px", margin: 0, padding: 0 }}
                    />
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                    To:
                  </Typography>
                  <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                    {item?.recipients[0].firstName} {"  "}{" "}
                    {item?.recipients[0].lastName}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                    Subject:
                  </Typography>
                  <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                    {item?.subject ? item?.subject : "(no Subject)"}
                  </Typography>
                </Box>
              </Box>
              {/* icons Box */}
              <Box
                sx={{
                  justifyContent: "flex-end",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ display: "flex", gap: 2 }}>
                  <IconButton>
                    <StarBorderIcon style={{ fontSize: "16px" }} />
                  </IconButton>
                  <IconButton>
                    <UndoIcon style={{ fontSize: "16px", color: "#085b93" }} />
                  </IconButton>
                  <IconButton>
                    <RedoIcon style={{ fontSize: "16px", color: "#085b93" }} />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon style={{ fontSize: "16px", color: "red" }} />
                  </IconButton>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: 500,
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    {item?.createdDate
                      ? `${dayjs(item?.createdDate).format(
                          "ddd , DD/MM/YYYY"
                        )} ${dayjs(item?.createdDate).format("HH:mm")}`
                      : ""}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                mt: "20px",
              }}
            >
              <Divider
                sx={{
                  width: "80%",
                }}
              />
            </Box>
            <Box
              sx={{
                p: 3,
                // justifyContent: "center",
                display: "flex",
                // width: "100%",
              }}
            >
              {" "}
              {item?.body ? stripHtmlTags(item.body) : ""}
            </Box>
          </div>
        ))}
      </Grid2>
    </>
  );
};

export default EmailDetailModule;
