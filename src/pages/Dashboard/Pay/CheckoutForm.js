import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CheckoutForm.css";
import { CircularProgress, Button, Container, Box } from "@mui/material";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = ({ booking }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const price = parseInt(booking?.hotelData?.price);

  useEffect(() => {
    axios
      .post("https://tranquil-cove-40150.herokuapp.com/create-payment-intent", {
        price,
      })
      .then((res) => setClientSecret(res.data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: error.message,
        confirmButtonText: "Try Again",
      });
    } else {
      console.log(paymentMethod);
    }
    // confirm payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: booking?.name,
            email: user?.email,
          },
        },
      });
    if (intentError) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: intentError.message,
        confirmButtonText: "Try Again",
      });
    } else {
      console.log(paymentIntent);
      setProcessing(false);
      axios
        .put(`https://tranquil-cove-40150.herokuapp.com/booking/${booking._id}`)
        .then((res) => {
          if (res.data?.modifiedCount) {
            Swal.fire({
              icon: "success",
              title: "Congrats!",
              text: "Your Payment Is Successful",
              confirmButtonText: "Enjoy",
            });
          }
        });
    }
  };

  return (
    <>
      {!booking?.hotelData?.price ? (
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Container sx={{ my: 10 }}>
          <Box
            sx={{
              backgroundColor: "#e7e7e7",
              padding: "10px",
              margin: "0 auto",
              borderRadius: "10px",
              maxWidth: "500px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
              {processing ? (
                <CircularProgress />
              ) : (
                <Button variant="contained" type="submit" disabled={!stripe}>
                  Pay ${booking?.hotelData?.price}
                </Button>
              )}
            </form>
          </Box>
        </Container>
      )}
    </>
  );
};

export default CheckoutForm;
