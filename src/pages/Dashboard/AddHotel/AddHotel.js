import { Button, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddHotel = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("https://tranquil-cove-40150.herokuapp.com/hotels", data).then((res) => {
      if (res.data?.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Hurrah!",
          text: data?.name + "Is Added To The Hotels",
          confirmButtonText: "Cheers",
        });
        reset();
      }
    });
  };
  return (
    <Container sx={{ my: 10 }}>
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
            label="Name"
            required
            type="text"
            fullWidth
            margin="dense"
            variant="filled"
            {...register("name")}
          />

          <TextField
            label="Price"
            required
            type="number"
            fullWidth
            margin="dense"
            variant="filled"
            {...register("price")}
          />
          <TextField
            label="Location"
            required
            type="text"
            fullWidth
            margin="dense"
            variant="filled"
            {...register("location")}
          />
          <TextField
            label="Image Url"
            required
            type="url"
            fullWidth
            margin="dense"
            variant="filled"
            {...register("img")}
          />
          <TextField
            label="Short Description"
            required
            type="text"
            fullWidth
            multiline
            rows={4}
            margin="dense"
            variant="filled"
            {...register("description")}
          />
          <Button variant="contained" sx={{ mt: 2 }} type="submit">
            Add Hotel
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddHotel;
