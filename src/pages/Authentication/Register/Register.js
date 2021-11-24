import React from "react";
import {
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { googleSignIn, registerUser, loading } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    registerUser(data.name, data.email, data.password, navigate);
    reset();
  };

  return (
    <>
      {loading ? (
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
                helperText="Password Must Be At Least 6 Characters"
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
                  onClick={() => googleSignIn(location, navigate)}
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
      )}
    </>
  );
};
export default Register;
