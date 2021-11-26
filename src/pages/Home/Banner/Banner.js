import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import banner1 from "../../../images/banner1.jpg";
import banner2 from "../../../images/banner2.jpg";
import banner3 from "../../../images/banner3.jpg";
import { Box } from "@mui/system";
import Fade from "react-reveal/Fade";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
  };

  const useStyle = makeStyles({
    bannerBg1: {
      background: `url(${banner1})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      backgroundColor: "rgba(45, 58, 75, .8)",
      backgroundBlendMode: "darken, luminosity",
    },
    bannerBg2: {
      background: `url(${banner2})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      backgroundColor: "rgba(45, 58, 75, .8)",
      backgroundBlendMode: "darken, luminosity",
    },
    bannerBg3: {
      background: `url(${banner3})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      backgroundColor: "rgba(45, 58, 75, .8)",
      backgroundBlendMode: "darken, luminosity",
    },
  });

  const { bannerBg1, bannerBg2, bannerBg3 } = useStyle();

  return (
    <>
      <Slider {...settings}>
        <Grid container className={bannerBg1} alignItems="center">
          <Fade top big>
            <Box
              style={{
                paddingTop: "30vh",
                margin: "2vh",
                maxWidth: "500px",
              }}
            >
              <Box
                style={{
                  background: "rgba(128, 128, 128, 0.54)",
                  padding: "20px",
                  color: "#fff",
                }}
              >
                <Typography variant="h2">Luxury Hotel</Typography>
                <Typography variant="h4" sx={{ my: 2 }}>
                  Own Styles
                </Typography>
                <Typography variant="h1">30% OFF</Typography>
                <Button variant="contained" sx={{ mt: 2 }}>
                  Book Now
                </Button>
              </Box>
            </Box>
          </Fade>
        </Grid>
        <Grid container className={bannerBg2}>
          <Fade top big>
            <Box
              style={{
                paddingTop: "30vh",
                margin: "2vh",
                maxWidth: "500px",
              }}
            >
              <Box
                style={{
                  background: "rgba(128, 128, 128, 0.54)",
                  padding: "20px",
                  color: "#fff",
                }}
              >
                <Typography variant="h2">Beach Resort</Typography>
                <Typography variant="h4" sx={{ my: 2 }}>
                  Mega Offer
                </Typography>
                <Typography variant="h1">50% OFF</Typography>
                <Button variant="contained" sx={{ mt: 2 }}>
                  Book Now
                </Button>
              </Box>
            </Box>
          </Fade>
        </Grid>
        <Grid container className={bannerBg3}>
          <Fade top big>
            <Box
              style={{
                paddingTop: "30vh",
                margin: "2vh",
                maxWidth: "500px",
              }}
            >
              <Box
                style={{
                  background: "rgba(128, 128, 128, 0.54)",
                  padding: "20px",
                  color: "#fff",
                }}
              >
                <Typography variant="h2">Motel Front Pool</Typography>
                <Typography variant="h4" sx={{ my: 2 }}>
                  Our Class
                </Typography>
                <Typography variant="h1">45% OFF</Typography>
                <Button variant="contained" sx={{ mt: 2 }}>
                  Book Now
                </Button>
              </Box>
            </Box>
          </Fade>
        </Grid>
      </Slider>
    </>
  );
};

export default Banner;
