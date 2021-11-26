import {
  Button,
  Container,
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../../images/about-img.jpg";
import bestImg from "../../../images/best-img.jpg";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import LockIcon from "@mui/icons-material/Lock";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PinDropIcon from "@mui/icons-material/PinDrop";
import Fade from "react-reveal/Fade";

const HomeAbout = () => {
  return (
    <>
      {/* About Section */}
      <Container sx={{ mt: 15 }}>
        <Typography sx={{ mb: 3 }} gutterBottom align="center" variant="h3">
          <Divider textAlign="left">Know About Us</Divider>
        </Typography>
        <Grid container spacing={8}>
          <Grid item xs={12} md={7}>
            <Fade left>
              <img src={aboutImg} alt="Hotel" width="100%" height="350px" />
            </Fade>
          </Grid>
          <Grid item xs={12} md={5}>
            <Fade right>
              <Box
                sx={{ display: "flex", alignItems: "center", height: "100%" }}
              >
                <Box>
                  <Typography variant="h3">
                    Bringing value to <br /> your accommodation partners
                  </Typography>
                  <Typography sx={{ my: 3 }} variant="body1">
                    We believe that all great properties deserve to be
                    discovered. That’s why we make it quick and easy for
                    accommodation providers all around the world to market their
                    properties, reach new customers and grow their business via
                    our platform.
                  </Typography>
                  <Button variant="contained">
                    <Link
                      style={{ textDecoration: "none", color: "#fff" }}
                      to="/about"
                    >
                      More About Us
                    </Link>
                  </Button>
                </Box>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>

      {/* Our Best Section */}
      <Container sx={{ mt: 8 }}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={5}>
            <Fade bottom>
              <Box sx={{ height: "100%" }}>
                <Box>
                  <Typography variant="h3">Our Best</Typography>
                  <Typography sx={{ my: 3 }} variant="body1">
                    Founded in 1996 in Amsterdam, Lustrio is a part of Booking
                    Holdings Inc. (NASDAQ: BKNG), Lustrio’s mission is to make
                    it easier for everyone to experience the world.
                  </Typography>
                </Box>
                <Grid container>
                  <Grid item xs={6}>
                    <ListItem>
                      <ListItemIcon>
                        <ApartmentIcon fontSize="large" color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        id="switch-list-label-wifi"
                        primary="250+ Hotels"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <BookOnlineIcon fontSize="large" color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        id="switch-list-label-wifi"
                        primary="Manage your bookings online"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <BusinessCenterIcon fontSize="large" color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        id="switch-list-label-wifi"
                        primary="Business facilities"
                      />
                    </ListItem>
                  </Grid>
                  <Grid item xs={6}>
                    <ListItem>
                      <ListItemIcon>
                        <AccountBalanceWalletIcon
                          fontSize="large"
                          color="primary"
                        />
                      </ListItemIcon>
                      <ListItemText
                        id="switch-list-label-wifi"
                        primary="Prices you can't beat!"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LockIcon fontSize="large" color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        id="switch-list-label-wifi"
                        primary="Booking is safe"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <PinDropIcon fontSize="large" color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        id="switch-list-label-wifi"
                        primary="Great check-in experience"
                      />
                    </ListItem>
                  </Grid>
                </Grid>
              </Box>
            </Fade>
          </Grid>
          <Grid item xs={12} md={7}>
            <Fade top>
              <img src={bestImg} alt="Hotel" width="100%" height="350px" />
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomeAbout;
