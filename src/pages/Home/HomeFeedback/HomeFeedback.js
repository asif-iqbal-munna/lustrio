import {
  Avatar,
  Container,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Divider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Slide from "react-reveal/Slide";

const HomeFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    axios
      .get("https://tranquil-cove-40150.herokuapp.com/feedbacks")
      .then((res) => setFeedbacks(res.data));
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container sx={{ my: 15 }}>
      <Typography sx={{ mb: 3 }} gutterBottom align="center" variant="h3">
        <Divider textAlign="left">Clients Feedbacks</Divider>
      </Typography>
      <Box>
        <Slider {...settings}>
          {feedbacks.map((feedback) => (
            <Box key={feedback._id} sx={{ mx: 2 }}>
              <Slide bottom>
                <Box sx={{ p: 3, m: 3, backgroundColor: "#F7F7F7" }}>
                  <ListItem>
                    <ListItemAvatar>
                      {feedback?.img ? (
                        <Avatar alt={feedback.name} src={feedback.img} />
                      ) : (
                        <Avatar
                          alt={feedback.name}
                          src="/static/images/avatar/1.jpg"
                        />
                      )}
                    </ListItemAvatar>
                    <ListItemText primary={feedback.name} />
                  </ListItem>
                  <Typography variant="body2">{feedback.feedback}</Typography>
                  <Rating
                    sx={{ mt: 1 }}
                    name="read-only"
                    value={feedback.rating}
                    readOnly
                  />
                </Box>
              </Slide>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default HomeFeedback;
