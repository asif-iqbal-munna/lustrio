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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemIcon from "@mui/material/ListItemIcon";

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

  const { navItem, navIcon, iconColor, navMenu, navLogo } = useStyle();

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
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
              <Button variant="outlined" color="secondary" size="small">
                <Link className={navItem} to="/login">
                  Login
                </Link>
              </Button>
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
