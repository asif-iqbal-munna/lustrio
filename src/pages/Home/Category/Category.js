import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const useStyle = makeStyles({
    categoryBg1: {
      background:
        "url(https://i.ibb.co/mJ0JN7N/istockphoto-1167217673-612x612.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "auto",
      height: "100%",
      backgroundColor: "rgba(45, 58, 75, .4)",
      backgroundBlendMode: "darken, luminosity",
    },
    categoryBg2: {
      background: "url(https://i.ibb.co/4gyQ6CV/sylhet-sidebar.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "auto",
      height: "195px",
      backgroundColor: "rgba(45, 58, 75, .4)",
      backgroundBlendMode: "darken, luminosity",
    },
    categoryBg3: {
      background: "url(https://i.ibb.co/Y0Mp8Bx/amiakhum.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "auto",
      height: "192px",
      backgroundColor: "rgba(45, 58, 75, .4)",
      backgroundBlendMode: "darken, luminosity",
    },
    categoryBg4: {
      background:
        "url(https://i.ibb.co/Sswtprg/299137cc6b735ef3d5a1b0627b4c0fbb.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "auto",
      height: "192px",
      backgroundColor: "rgba(45, 58, 75, .4)",
      backgroundBlendMode: "darken, luminosity",
    },
  });

  const { categoryBg1, categoryBg2, categoryBg3, categoryBg4 } = useStyle();

  return (
    <Container sx={{ mt: 15 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} sx={{ height: "450px" }}>
          <Link style={{ textDecoration: "none" }} to="/contact">
            <Box
              sx={{ display: "flex", alignItems: "flex-end" }}
              className={categoryBg1}
            >
              <Box
                sx={{
                  background: "rgba(128, 128, 128, 0.70)",
                  padding: "20px",
                  color: "#fff",
                  flexGrow: 1,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ letterSpacing: "3px" }}
                  align="center"
                >
                  Cox's Bazar
                </Typography>
              </Box>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container direction="row" spacing={4} sx={{ height: "450px" }}>
            <Grid item xs={12}>
              <Link style={{ textDecoration: "none" }} to="/contact">
                <Box
                  sx={{ display: "flex", alignItems: "flex-end" }}
                  className={categoryBg2}
                >
                  <Box
                    sx={{
                      background: "rgba(128, 128, 128, 0.70)",
                      padding: "20px",
                      color: "#fff",
                      flexGrow: 1,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ letterSpacing: "3px" }}
                      align="center"
                    >
                      Sylhet
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={4} sx={{ height: "100%" }}>
                <Grid item xs={6}>
                  <Link style={{ textDecoration: "none" }} to="/contact">
                    <Box
                      sx={{ display: "flex", alignItems: "flex-end" }}
                      className={categoryBg3}
                    >
                      <Box
                        sx={{
                          background: "rgba(128, 128, 128, 0.70)",
                          padding: "20px",
                          color: "#fff",
                          flexGrow: 1,
                        }}
                      >
                        <Typography
                          variant="h4"
                          align="center"
                          sx={{ letterSpacing: "3px" }}
                        >
                          Bandarban
                        </Typography>
                      </Box>
                    </Box>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Link style={{ textDecoration: "none" }} to="/contact">
                    <Box
                      sx={{ display: "flex", alignItems: "flex-end" }}
                      className={categoryBg4}
                    >
                      <Box
                        sx={{
                          background: "rgba(128, 128, 128, 0.70)",
                          padding: "20px",
                          color: "#fff",
                          flexGrow: 1,
                        }}
                      >
                        <Typography
                          style={{ textDecoration: "none" }}
                          variant="h4"
                          align="center"
                          sx={{ letterSpacing: "3px" }}
                        >
                          Dhaka
                        </Typography>
                      </Box>
                    </Box>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Category;
