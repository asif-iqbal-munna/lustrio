import React from "react";
import {
  Container,
  Grid,
  ListItemIcon,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import MailIcon from "@mui/icons-material/Mail";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <>
      <Box sx={{ p: 5 }} style={{ backgroundColor: "#009688", color: "#fff" }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h4">Customer services</Typography>
              <MenuList>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Orders & Payments</MenuItem>
                <MenuItem>Delivery & Return</MenuItem>
                <MenuItem>Track Order</MenuItem>
              </MenuList>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h4">Information</Typography>
              <MenuList>
                <MenuItem>Mu Account</MenuItem>
                <MenuItem>Personalization</MenuItem>
                <MenuItem>Student Discount</MenuItem>
              </MenuList>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h5">About Us</Typography>
              <MenuList>
                <MenuItem>Careers</MenuItem>
                <MenuItem>Terms & Conditions</MenuItem>
                <MenuItem>Corporate</MenuItem>
              </MenuList>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h5">Contact Us</Typography>
              <MenuList>
                <MenuItem>
                  <ListItemIcon>
                    <LocationOnIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <Typography variant="inherit">
                    1203 Town Center <br /> Drive FL 33458 USA{" "}
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <PhoneInTalkIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <Typography variant="inherit">+841 123 456 78</Typography>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <MailIcon style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <Typography variant="inherit">info@lindashop.com</Typography>
                </MenuItem>
              </MenuList>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ p: 1 }} style={{ backgroundColor: "#000", color: "#fff" }}>
        <Typography variant="caption">
          Copyright © 2021 || Developed By{" "}
        </Typography>
        <a
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "#009688" }}
          href="https://www.linkedin.com/in/ai-munna/"
        >
          Asif Iqbal Munna
        </a>
      </Box>
    </>
  );
};

export default Footer;
