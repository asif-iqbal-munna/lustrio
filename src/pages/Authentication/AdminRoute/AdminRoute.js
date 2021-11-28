import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { admin, user } = useAuth();
  const location = useLocation();

  if (!admin) {
    return (
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
    );
  }

  if (!user.email || !admin) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default AdminRoute;
