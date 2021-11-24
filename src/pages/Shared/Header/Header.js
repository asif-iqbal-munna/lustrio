import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  List,
  ListItem,
  ListItemText,
  Divider,
  Drawer,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemIcon from "@mui/material/ListItemIcon";
import useAuth from "../../../hooks/useAuth";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import ContactsIcon from "@mui/icons-material/Contacts";
import FeedIcon from "@mui/icons-material/Feed";

const Header = () => {
  const theme = useTheme();
  const useStyle = makeStyles({
    navItem: {
      color: " #fff",
      textDecoration: "none",
      padding: "6px 12px",
      marginRight: "6px",
      fontSize: "16px",
      fontWeight: "700",
    },
    navIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    iconColor: {
      color: "#fff",
    },
    navMenu: {
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
    },
    navLogo: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "right",
      },
    },
  });

  const { user, logOut } = useAuth();

  const { navItem, navIcon, iconColor, navMenu, navLogo } = useStyle();

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem button>
          <ListItemIcon>
            <FeedIcon sx={{ color: " #3949AB" }} />
          </ListItemIcon>
          <ListItemText>
            <Link style={{ color: "#3949AB" }} className={navItem} to="/about">
              About
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactsIcon sx={{ color: " #3949AB" }} />
          </ListItemIcon>
          <ListItemText>
            <Link
              style={{ color: "#3949AB" }}
              className={navItem}
              to="/contact"
            >
              Contact
            </Link>
          </ListItemText>
        </ListItem>
        {!user?.email && (
          <ListItem button>
            <ListItemIcon>
              <LoginIcon sx={{ color: " #3949AB" }} />
            </ListItemIcon>
            <ListItemText>
              <Link
                style={{ color: "#3949AB" }}
                className={navItem}
                to="/login"
              >
                Login
              </Link>
            </ListItemText>
          </ListItem>
        )}
      </List>
      <Divider />
      <List>
        {user.email && (
          <>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon sx={{ color: " #3949AB" }} />
              </ListItemIcon>
              <ListItemText>
                <Link
                  style={{ color: "#3949AB" }}
                  className={navItem}
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem button onClick={logOut}>
              <ListItemIcon>
                <LogoutIcon sx={{ color: " #3949AB" }} />
              </ListItemIcon>
              <ListItemText>Log Out</ListItemText>
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={navIcon}
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon className={iconColor} />
            </IconButton>
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1, fontWeight: "bold" }}
              className={navLogo}
            >
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                Lustrio
              </Link>
            </Typography>
            <Box sx={{ display: "flex" }} className={navMenu}>
              <Button>
                <Link className={navItem} to="/about">
                  About
                </Link>
              </Button>
              <Button>
                <Link className={navItem} to="/contact">
                  Contact
                </Link>
              </Button>
              {user?.email ? (
                <>
                  <Button
                    sx={{ mr: 2 }}
                    variant="outlined"
                    color="secondary"
                    size="small"
                  >
                    <Link className={navItem} to="/dashboard">
                      Dashboard
                    </Link>
                  </Button>
                  <Button
                    onClick={logOut}
                    variant="outlined"
                    color="secondary"
                    size="small"
                    sx={{ color: " #fff" }}
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <Button variant="outlined" color="secondary" size="small">
                  <Link className={navItem} to="/login">
                    Login
                  </Link>
                </Button>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <React.Fragment>
          <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
};

export default Header;
