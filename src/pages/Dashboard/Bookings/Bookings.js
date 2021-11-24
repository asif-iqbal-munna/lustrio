import {
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`https://tranquil-cove-40150.herokuapp.com/bookings/${user.email}`)
      .then((res) => setBookings(res.data));
  }, [user.email]);

  return (
    <Box sx={{ px: 2 }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>&nbsp;</TableCell>
              <TableCell>Hotel</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Fat&nbsp;(g)</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <img src={row.hotelData.img} width="100px" alt="" />
                </TableCell>
                <TableCell>{row.hotelData.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  {row?.paid ? (
                    ""
                  ) : (
                    <Button size="small" variant="contained">
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

export default Bookings;
