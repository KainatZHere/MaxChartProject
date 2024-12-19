import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import TablePagination from "@mui/material/TablePagination";
import dayjs from "dayjs";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useNavigate, useOutletContext } from "react-router";
import { UserContext } from "../../../Context/UserConetxt";

const SendModule = () => {
  const [rows, setRows] = useState([]);
  const [emailId, setEmailId] = useState(500492);
  const [page, setPage] = React.useState(2);
  const [loading, setLoading] = useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { setRowData, handleSelectedEmailId } = useOutletContext();
  const { token } = useContext(UserContext);

  const getSendEmailsData = async () => {
    setLoading(true);
    const resp = await fetch(
      `http://tfs-dgk:8784/api/Email/GetEmailsList?UserId=70044&PageNumber=1&Rows=1000&isSent=true`,
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
    setLoading(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelectedEmailBox = (id) => {
    setEmailId(id);
    handleSelectedEmailId(id);
  };

  const stripHtmlTags = (html) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };

  useEffect(() => {
    // if (rows?.length > 0) {
    //   setEmailId(rows[0]?.emailId); // Automatically select the first email's ID
    // }
    getSendEmailsData();
  }, []);

  return (
    <>
      {" "}
      {/* Third Box  */}
      <Box
        sx={{
          height: "68vh",
          overflow: "auto",
          overflowX: "hidden",
          "&::-webkit-scrollbar": {
            width: "6px", // Adjust width of scrollbar
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#d3d3d3", // Color of the scrollbar thumb
            borderRadius: "10px", // Round corners for the scrollbar thumb
            "&:hover": {
              backgroundColor: "grey", // Darker color when hovered
            },
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#333", // Color of the track behind the scrollbar
            borderRadius: "10px",
          },
        }}
      >
        {loading ? (
          <div
            style={{
              width: "100%",
              height: "60vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </div>
        ) : rows?.length > 0 ? (
          rows.map((item, index) => (
            <Box
              key={index}
              sx={{
                mt: "1%",
                display: "flex",
                border: "1px solid #d3d3d3",
                borderLeft: "4px solid #085b93",
                bgcolor: item?.emailId === emailId ? "#E5EAFF" : "#ffffff",
                "&:hover": {
                  bgcolor: "#E5EAFF",
                },
                justifyContent: "space-between",
                p: 1,
              }}
              onClick={() => handleSelectedEmailBox(item?.emailId)}
            >
              <Box sx={{ display: "flex" }}>
                <IconButton
                  sx={{
                    m: 0,
                    p: 0,
                    height: "24px",
                    justifyContent: "flex-end",
                  }}
                >
                  {item?.isFav ? (
                    <StarRateIcon
                      style={{ color: "#FFCC00", fontSize: "20px" }}
                    />
                  ) : (
                    <StarBorderIcon style={{ fontSize: "20px" }} />
                  )}
                </IconButton>
                <Box sx={{ ml: "6px" }}>
                  <Typography>
                    {item?.senderFirstName} {item?.senderLastName}
                  </Typography>
                  <Typography
                    sx={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      width: "200px",
                    }}
                  >
                    {item?.subject ? item?.subject : "(no Subject)"}
                  </Typography>
                  <Typography
                    sx={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      width: "200px",
                    }}
                  >
                    {item?.body ? stripHtmlTags(item.body) : "(no Body)"}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ fontSize: "12px", color: "#000", fontWeight: 500 }}
                >
                  {item?.createdDate
                    ? dayjs(item?.createdDate).format("MM/DD/YYYY")
                    : ""}
                </Typography>
                <Typography
                  sx={{
                    ml: "3px",
                    fontSize: "12px",
                    color: "#000",
                    fontWeight: 500,
                  }}
                >
                  {item?.createdDate
                    ? dayjs(item?.createdDate).format("hh:mm A")
                    : ""}
                </Typography>
              </Box>
            </Box>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "10vh",
            }}
          >
            "Nothing in Inbox"
          </div>
        )}
      </Box>
      {/* Pagination Box */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "10vh",
          justifyContent: "flex-end",
        }}
      >
        {rows?.length > 0 ? (
          <TablePagination
            sx={{ p: 0, m: 0, overflow: "hidden" }}
            component="div"
            count={rows?.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default SendModule;
