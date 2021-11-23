import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
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
      .get("http://localhost:8000/hotels")
      .then((res) => setHotels(res.data));
  }, []);

  return (
    <Container>
      <Grid container sx={{ mt: 15 }} spacing={4}>
        {hotels.slice(0, 8).map((hotel) => (
          <Grid key={hotel?._id} item xs={6} sm={4} md={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={hotel?.img}
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
