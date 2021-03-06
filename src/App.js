import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, indigo } from "@mui/material/colors";
import HotelDetails from "./pages/HotelDetails/HotelDetails";
import Login from "./pages/Authentication/Login/Login";
import Register from "./pages/Authentication/Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./pages/Authentication/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import Bookings from "./pages/Dashboard/Bookings/Bookings";
import Feedback from "./pages/Dashboard/Feedback/Feedback";
import Pay from "./pages/Dashboard/Pay/Pay";
import MakeAdmin from "./pages/Dashboard/MakeAdmin.js/MakeAdmin";
import AdminRoute from "./pages/Authentication/AdminRoute/AdminRoute";
import ManageBookings from "./pages/Dashboard/ManageBookings/ManageBookings";
import ManageHotels from "./pages/Dashboard/ManageHotels/ManageHotels";
import AddHotel from "./pages/Dashboard/AddHotel/AddHotel";
import Hotels from "./pages/Hotels/Hotels";

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
      light: teal[400],
    },
    secondary: {
      main: indigo[600],
      light: indigo[500],
    },
  },
});

theme.typography.h5 = {
  fontSize: ".9rem",
  "@media (min-width:600px)": {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
};
theme.typography.h4 = {
  fontSize: "1.1rem",
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
};
theme.typography.h3 = {
  fontSize: "1.3rem",
  "@media (min-width:600px)": {
    fontSize: "1.6rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};
theme.typography.h2 = {
  fontSize: "1.8rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
};
theme.typography.h1 = {
  fontSize: "1.8rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route
              path="/hotels/:id"
              element={
                <PrivateRoute>
                  <HotelDetails />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard" element={<Bookings />} />
              <Route path="/dashboard/feedback" element={<Feedback />} />
              <Route path="/dashboard/payment/:bookingId" element={<Pay />} />
              <Route
                path="/dashboard/makeadmin"
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/managebookings"
                element={
                  <AdminRoute>
                    <ManageBookings />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/addhotel"
                element={
                  <AdminRoute>
                    <AddHotel />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/managehotels"
                element={
                  <AdminRoute>
                    <ManageHotels />
                  </AdminRoute>
                }
              />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
