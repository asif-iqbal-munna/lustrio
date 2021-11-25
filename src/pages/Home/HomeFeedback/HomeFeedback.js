import { FeedbackSharp } from "@mui/icons-material";
import {
  Avatar,
  Container,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

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
    <Container>
      <Box>
        <Slider {...settings}>
          {feedbacks.map((feedback) => (
            <Box sx={{ m: 2 }}>
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
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default HomeFeedback;
