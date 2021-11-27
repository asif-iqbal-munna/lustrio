import { Container, Divider, Typography } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Jvx8MIHMwV1adRc539K4t0FqTAsqFbS0rShfmOb3DniGKdE1S7Fhm2nbKhiHXkZ5wG1ObqHgUi3bRW8YL3TADBt00JnLnLymU"
);

const Pay = () => {
  const [booking, setBooking] = useState();
  const { bookingId } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/booking/${bookingId}`)
      .then((res) => setBooking(res.data));
  }, [bookingId]);
  return (
    <Container>
      <Typography sx={{ mb: 2 }} gutterBottom align="center" variant="h3">
        <Divider>
          Pay for {booking?.hotelData?.name} ${booking?.hotelData?.price}
        </Divider>
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </Typography>
    </Container>
  );
};

export default Pay;
