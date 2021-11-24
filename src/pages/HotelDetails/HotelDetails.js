import {
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../Shared/Header/Header";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const HotelDetails = () => {
  const { id } = useParams();
  const [hotelData, setHotelData] = useState({});

  useEffect(() => {
    axios
      .get(`https://tranquil-cove-40150.herokuapp.com/hotel/${id}`)
      .then((res) => setHotelData(res.data));
  }, [id]);
  const { img, name, price, location, description } = hotelData;
  const { user } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.status = "pending";
    data.hotelData = hotelData;
    axios.post("https://tranquil-cove-40150.herokuapp.com/bookings", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Congratulation",
          text: "Your Booking Is Successful. Please Proceed Payment From Dashboard",
          confirmButtonText: "Ok",
        });
      }
      reset();
    });
  };

  return (
    <>
      <Header />
      {!user.email ? (
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
        <Container sx={{ mt: 10 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box>
                <Box>
                  <img
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    src={img}
                    alt=""
                  />
                </Box>
                <Typography variant="h3" sx={{ mt: 2 }}>
                  {name}
                </Typography>
                <Typography variant="h3" sx={{ my: 2 }}>
                  {price}
                </Typography>
                <Typography variant="h4" gutterBottom>
                  {location}
                </Typography>
                <Typography variant="body1">{description}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: "rgba(8, 18, 41, 0.18)",
                  padding: "30px",
                  margin: "0 10px",
                  borderRadius: "10px",
                }}
              >
                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    label="Name"
                    required
                    type="text"
                    fullWidth
                    defaultValue={user.displayName}
                    margin="dense"
                    variant="filled"
                    {...register("name")}
                  />
                  <TextField
                    label="Email Address"
                    required
                    type="email"
                    fullWidth
                    margin="dense"
                    defaultValue={user.email}
                    variant="filled"
                    {...register("email")}
                  />
                  <TextField
                    required
                    type="date"
                    fullWidth
                    margin="dense"
                    variant="filled"
                    {...register("checkIn")}
                  />
                  <TextField
                    label="address"
                    type="text"
                    fullWidth
                    margin="dense"
                    variant="filled"
                    {...register("address")}
                  />
                  <TextField
                    label="Phone"
                    type="number"
                    fullWidth
                    margin="dense"
                    variant="filled"
                    {...register("phone")}
                  />

                  <Button variant="contained" sx={{ mt: 2 }} type="submit">
                    Book
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default HotelDetails;
