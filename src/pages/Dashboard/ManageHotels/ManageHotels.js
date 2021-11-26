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
import DeleteIcon from "@mui/icons-material/Delete";

const ManageHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [fetch, setFetch] = useState(false);
  useEffect(() => {
    axios
      .get("https://tranquil-cove-40150.herokuapp.com/hotels")
      .then((res) => setHotels(res.data));
  }, [fetch]);

  const handleDeleteHotel = (id) => {
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
          .delete(`https://tranquil-cove-40150.herokuapp.com/hotels/${id}`)
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
        <Divider>Manage Hotels</Divider>
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Hotels</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hotels.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  <img
                    width="80px"
                    src={`data:image/png;base64,${row.img}`}
                    alt=" "
                  />
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.location}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => handleDeleteHotel(row._id)}>
                    <DeleteIcon fontSize="large" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ManageHotels;
