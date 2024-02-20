const express = require("express");
const cors = require("cors");
const app = express();
const { resolve } = require("path");
// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

app.use(cors());
app.use(express.static(resolve(__dirname, '../public')));

app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
  });
});

app.post('/create-checkout-session', async (req, res) => {
  try {
    // Correct the creation of a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${req.headers.origin}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel.html`,
    });

    // Respond with the ID of the Stripe checkout session
    res.send({
      sessionId: session.id, // Send the session ID to the client
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).send({
      error: {
        message: error.message,
      },
    });
  }
});



app.listen(3000, () =>
  console.log(`Node server listening at http://localhost:3000`)
);