import { Button, Container, Input, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddHotel = () => {
  const [image, setImage] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (!image) {
      return alert("You Must Upload Your Hotel's Image");
    } else if (image.size > 50484) {
      return alert("Image Size Must Be Less Than 50kb");
    }
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("location", data.location);
    formData.append("description", data.description);
    formData.append("image", image);
    axios.post("https://tranquil-cove-40150.herokuapp.com/hotels", formData).then((res) => {
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
          <Input
            accept="image/*"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <Button variant="contained" component="span">
            Upload
          </Button>
          <Button variant="contained" sx={{ mt: 2 }} type="submit">
            Add Hotel
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddHotel;
