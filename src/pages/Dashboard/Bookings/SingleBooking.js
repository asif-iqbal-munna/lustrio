import {
  Badge,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const SingleBooking = ({ booking, setFetch }) => {
  const { name, price, img } = booking.hotelData;

  const handleDeleteOrder = (id) => {
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
    <>
      {!booking ? (
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid item xs={12} md={6}>
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 120 }}
              image={`data:image/png;base64,${img}`}
              alt="Live from space album cover"
            />
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
              <CardContent sx={{ flex: "1 0" }}>
                <Typography component="div" variant="h4">
                  {name}
                </Typography>
                <Badge
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  color="secondary"
                  badgeContent={booking.status}
                >
                  <Typography
                    sx={{ m: 1 }}
                    variant="h4"
                    color="text.secondary"
                    component="div"
                  >
                    ${price}
                  </Typography>
                </Badge>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: 2,
                  }}
                >
                  <Button
                    onClick={() => handleDeleteOrder(booking._id)}
                    variant="contained"
                    size="small"
                    color="primary"
                  >
                    Cancel
                  </Button>
                  <Box>
                    <Button variant="contained" color="secondary" size="small">
                      Pay
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      )}
    </>
  );
};

export default SingleBooking;
