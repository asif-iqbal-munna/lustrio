import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HotelsHome = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    axios
      .get("https://tranquil-cove-40150.herokuapp.com/hotels")
      .then((res) => setHotels(res.data));
  }, []);

  return (
    <Container sx={{ mt: 15 }}>
      <Typography sx={{ mb: 3 }} gutterBottom align="center" variant="h3">
        <Divider textAlign="left">Featured Hotels</Divider>
      </Typography>
      <Grid container spacing={4}>
        {hotels.slice(0, 8).map((hotel) => (
          <Grid key={hotel?._id} item xs={6} sm={4} md={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={`data:image/png;base64,${hotel.img}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {hotel?.name}
                </Typography>
                <Typography variant="body2" color="h3">
                  Starts from
                  <Box component="span" sx={{ fontSize: "22px" }}>
                    &nbsp; ${hotel?.price}
                  </Box>{" "}
                  /night
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/hotels/${hotel?._id}`}
                >
                  <Button variant="contained" size="small">
                    Book Now
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HotelsHome;
