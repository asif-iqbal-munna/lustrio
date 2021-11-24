import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, indigo } from "@mui/material/colors";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
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
              <Route path="/dashboard/pay" element={<Pay />} />
              <Route path="/dashboard/makeadmin" element={<MakeAdmin />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
