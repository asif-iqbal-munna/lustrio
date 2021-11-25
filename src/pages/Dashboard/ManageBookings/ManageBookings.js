import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageBookings = () => {
  const [hotels, setHotels] = useState([]);
  const [fetch, setFetch] = useState(false);
  useEffect(() => {
    axios
      .get("https://tranquil-cove-40150.herokuapp.com/bookings")
      .then((res) => setHotels(res.data));
  }, [fetch]);

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
        axios.delete(`https://tranquil-cove-40150.herokuapp.com/booking/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire("Deleted!", "Your booking has been deleted.", "success");
          }
          setFetch(false);
        });
      }
    });
  };

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Hotel</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Cancel</TableCell>
              <TableCell>Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hotels.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img width="50px" src={row.hotelData.img} alt=" " />
                </TableCell>
                <TableCell>{row.hotelData.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleDeleteBooking(row._id)}
                    variant="outlined"
                    size="small"
                  >
                    Cancel
                  </Button>
                </TableCell>
                <TableCell>
                  {row?.paid ? (
                    "Paid"
                  ) : (
                    <Button variant="contained" size="small">
                      Pay
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ManageBookings;
