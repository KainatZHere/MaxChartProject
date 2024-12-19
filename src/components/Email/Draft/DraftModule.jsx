import { Box, Grid2, Typography, CircularProgress } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { UserContext } from "../../../Context/UserConetxt";
import TablePagination from "@mui/material/TablePagination";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import dayjs from "dayjs";

const DraftModule = () => {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useContext(UserContext);

  const getDraftEmailData = async () => {
    setLoading(true);
    const resp = await fetch(
      `http://tfs-dgk:8784/api/Email/GetEmailsList?UserId=70044&PageNumber=1&Rows=1000&isDraft=true`,
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

  useEffect(() => {
    getDraftEmailData();
  }, []);

  return (
    <>
      <Grid2 container sx={{ m: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            borderRadius: "6px",
            bgcolor: "#ffffff",
            height: "75vh",
            border: "1px solid #d3d3d3",
          }}
        >
          {loading ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "10vh",
              }}
            >
              {" "}
              <CircularProgress />
            </div>
          ) : rows?.length > 0 ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  borderRadius: "6px",
                  bgcolor: "#ffffff",
                  height: "68vh",
                  border: "1px solid #d3d3d3",
                  overflow: "auto",
                }}
              >
                {rows?.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid #d3d3d3",
                      p: 1,
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 5 }}>
                      <input
                        type="checkbox"
                        style={{ width: "16px", height: "16px" }}
                      />
                      <Typography sx={{ fontSize: "14px", color: "red" }}>
                        [Draft]
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                          // textTransform: "uppercase",
                        }}
                      >
                        {item?.subject ? item?.subject : "(no Subject)"}
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", gap: 4 }}>
                      <BorderColorIcon style={{ fontSize: "20px" }} />
                      <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                        {item?.createdDate
                          ? dayjs(item?.createdDate).format("MM/DD/YYYY")
                          : ""}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  p: 1,
                  height: "6vh",
                }}
              >
                <TablePagination
                  component="div"
                  count={rows?.length}
                  page={page}
                  onPageChange={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  sx={{
                    "& .MuiTablePagination-actions": {
                      borderRadius: "10px",
                      border: "1px solid #d3d3d3",
                    },
                  }}
                />
              </Box>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "75vh",
              }}
            >
              <DraftsOutlinedIcon style={{ fontSize: "38px", color: "grey" }} />
              <Typography
                sx={{ fontSize: "20px", p: 2, fontWeight: 600, color: "#444" }}
              >
                Drafts are Empty!
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,

                  color: "#000",
                }}
              >
                You currently have no drafts saved. Start
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#000",
                }}
              >
                Creating Content to see it here!
              </Typography>
            </Box>
          )}
        </Box>
      </Grid2>
    </>
  );
};

export default DraftModule;
