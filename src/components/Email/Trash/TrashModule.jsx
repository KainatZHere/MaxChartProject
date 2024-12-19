import { Box, Grid2, Typography } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../Context/UserConetxt";
import TablePagination from "@mui/material/TablePagination";

const TrashModule = () => {
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

  //   const getDraftEmailData = async () => {
  //     setLoading(true);
  //     const resp = await fetch(
  //       `http://tfs-dgk:8784/api/Email/GetEmailsList?UserId=70044&PageNumber=1&Rows=1000&isDraft=true`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           auhorization: `Bearer${token}`,
  //         },
  //       }
  //     );
  //     const data = await resp?.json();
  //     setRows(data?.result);
  //     setLoading(false);
  //   };

  //   useEffect(() => {
  //     getDraftEmailData();
  //   }, []);

  return (
    <Grid2 container sx={{ m: 0 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          borderBottom: "1px solid grey",
          alignItems: "center",
          width: "100%",
          bgcolor: "#ffffff",
          p: 1,
        }}
      >
        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
          Messages that have been in Trash more than 30 days will be
          automatically deleted.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          bgcolor: "#F1F1F1",
          p: 1,
        }}
      >
        <Typography
          sx={{ fontSize: "14px", fontWeight: 600, color: "#085F99" }}
        >
          No Conversation in Trash
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          borderRadius: "6px",
          bgcolor: "#ffffff",
          height: "65vh",
          border: "1px solid #d3d3d3",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "75vh",
            borderBottom: "1px solid #d3d3d3",
          }}
        >
          <Typography
            sx={{ fontSize: "14px", p: 2, fontWeight: 500, color: "#444" }}
          >
            No rows
          </Typography>
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
            count={100}
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
      </Box>
    </Grid2>
  );
};

export default TrashModule;
