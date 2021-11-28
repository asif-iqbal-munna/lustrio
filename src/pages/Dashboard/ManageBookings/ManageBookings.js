import {
  Button,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [fetch, setFetch] = useState(false);
  useEffect(() => {
    axios
      .get("https://tranquil-cove-40150.herokuapp.com/bookings")
      .then((res) => setBookings(res.data));
  }, [fetch]);

  const handleRefund = () => {
    Swal.fire({
      icon: "warning",
      title: "Wait!",
      text: "Refund Will Be Processed ASAP",
      confirmButtonText: "Ok",
    });
  };

  const handleDeleteBooking = (id) => {
    setFetch(true);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://tranquil-cove-40150.herokuapp.com/booking/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire(
                "Deleted!",
                "Your booking has been deleted.",
                "success"
              );
            }
            setFetch(false);
          });
      }
    });
  };

  return (
    <Box sx={{ px: 2 }}>
      <Typography sx={{ mb: 2 }} gutterBottom align="center" variant="h3">
        <Divider>Manage Bookings</Divider>
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Hotel</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Cancel</TableCell>
              <TableCell>Payment Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img
                    width="50px"
                    src={`data:image/png;base64,${row.hotelData.img}`}
                    alt=" "
                  />
                </TableCell>
                <TableCell>{row.hotelData.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  {row.status === "approved" ? (
                    <Button
                      onClick={handleRefund}
                      variant="outlined"
                      size="small"
                    >
                      Refund
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleDeleteBooking(row._id)}
                      variant="outlined"
                      size="small"
                    >
                      Cancel
                    </Button>
                  )}
                </TableCell>
                <TableCell>{row?.paid ? "Paid" : "Not Paid"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ManageBookings;
