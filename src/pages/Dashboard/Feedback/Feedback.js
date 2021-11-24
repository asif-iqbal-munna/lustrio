import { Button, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const Feedback = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://tranquil-cove-40150.herokuapp.com/feedbacks", data)
      .then((res) => {
        if (res.data?.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Hurrah!",
            text: "Thanks For Your Valuable Feedback",
            confirmButtonText: "Ok",
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
            defaultValue={user.displayName}
            variant="filled"
            {...register("name")}
          />
          <TextField
            label="Rating"
            required
            type="number"
            fullWidth
            margin="dense"
            variant="filled"
            helperText="Rating Upto 5"
            {...register("rating", { max: 5 })}
          />
          <TextField
            label="Your Feedback"
            required
            type="text"
            fullWidth
            multiline
            rows={4}
            margin="dense"
            variant="filled"
            {...register("feedback")}
          />
          <Button variant="contained" sx={{ mt: 2 }} type="submit">
            Add Review
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Feedback;
