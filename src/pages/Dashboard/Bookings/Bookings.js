import { Typography, Grid, Divider } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import SingleBooking from "./SingleBooking";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [fetch, setFetch] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`https://tranquil-cove-40150.herokuapp.com/bookings/${user.email}`)
      .then((res) => setBookings(res.data));
  }, [user.email, fetch]);

  return (
    <Box sx={{ px: 2 }}>
      <Typography sx={{ mb: 2 }} gutterBottom align="center" variant="h3">
        <Divider>Your Bookings</Divider>
      </Typography>
      <Box>
        <Grid container spacing={4}>
          {bookings.map((booking) => (
            <SingleBooking
              key={booking._id}
              booking={booking}
              setFetch={setFetch}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Bookings;
