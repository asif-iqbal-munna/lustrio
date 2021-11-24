import React from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { googleSignIn, registerUser } = useAuth();
  const onSubmit = (data) => {
    registerUser(data.name, data.email, data.password);
    reset();
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
            label="Email Address"
            required
            type="email"
            fullWidth
            margin="dense"
            variant="filled"
            {...register("email")}
          />
          <TextField
            label="Password"
            required
            type="password"
            fullWidth
            margin="dense"
            variant="filled"
            autoComplete=" current-password"
            {...register("password")}
          />
          <Button variant="contained" sx={{ mt: 2 }} type="submit">
            Register
          </Button>
          <Typography variant="body1" sx={{ mt: 3 }}>
            Already Registered?{" "}
            <Link style={{ textDecoration: "none" }} to="/login">
              Please Login
            </Link>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 3,
            }}
          >
            <Button
              onClick={googleSignIn}
              sx={{ mb: 2 }}
              variant="contained"
              color="secondary"
            >
              <GoogleIcon sx={{ mr: 2 }} />
              Sign In With Google
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default Register;
