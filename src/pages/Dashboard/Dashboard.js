import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ReviewsIcon from "@mui/icons-material/Reviews";
import PaymentIcon from "@mui/icons-material/Payment";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Dashboard = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { logOut } = useAuth();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Lustrio Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ArrowBackIosNewIcon />
            ) : (
              <ArrowBackIosNewIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link style={{ textDecoration: "none" }} to="/dashboard">
            <ListItem button>
              <ListItemIcon>
                <CalendarTodayIcon sx={{ color: " #3949AB" }} />
              </ListItemIcon>
              <ListItemText>Bookings</ListItemText>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/dashboard/feedback">
            <ListItem button>
              <ListItemIcon>
                <ReviewsIcon sx={{ color: " #3949AB" }} />
              </ListItemIcon>
              <ListItemText>Feedback</ListItemText>
            </ListItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/dashboard/pay">
            <ListItem button>
              <ListItemIcon>
                <PaymentIcon sx={{ color: " #3949AB" }} />
              </ListItemIcon>
              <ListItemText>Pay</ListItemText>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={logOut}>
            <ListItemIcon>
              <LogoutIcon sx={{ color: " #3949AB" }} />
            </ListItemIcon>
            <ListItemText> Log Out</ListItemText>
          </ListItem>
          <Link style={{ textDecoration: "none" }} to="/">
            <ListItem button>
              <ListItemIcon>
                <HomeIcon sx={{ color: " #3949AB" }} />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
