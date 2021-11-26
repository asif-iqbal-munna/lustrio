import {
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const user = { email: data.email };
    axios
      .put("https://tranquil-cove-40150.herokuapp.com/users/admin", user)
      .then((res) => {
        if (res.data?.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Bravo!",
            text: `${data.email} Has Been Given The Admin Role`,
            confirmButtonText: "Cheers",
          });
        }
        reset();
      });
  };

  return (
    <Container sx={{ my: 10 }}>
      <Typography sx={{ mb: 2 }} gutterBottom align="center" variant="h3">
        <Divider>Make Admin</Divider>
      </Typography>
      <Box
        sx={{
          backgroundColor: "rgba(8, 18, 41, 0.18)",
          padding: "30px",
          margin: "0 auto",
          borderRadius: "10px",
          maxWidth: "500px",
        }}
      >
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Email Address"
            required
            type="email"
            fullWidth
            margin="dense"
            variant="filled"
            {...register("email")}
          />
          <Button variant="contained" sx={{ mt: 2 }} type="submit">
            Make Admin
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default MakeAdmin;
