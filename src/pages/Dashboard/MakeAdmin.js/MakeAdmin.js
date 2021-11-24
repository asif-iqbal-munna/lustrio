import { Button, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
