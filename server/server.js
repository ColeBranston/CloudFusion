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
      const paymentIntent = await stripe.checkout.sessions.create({
          amount: 2000,
          currency: 'usd',
          automatic_payment_methods: { enabled: true },
      });

      res.send({
          clientSecret: paymentIntent.client_secret,
      });
  } catch (error) {
      return res.status(400).send({
          error: {
              message: error.message,
          },
      });
  }
});


app.listen(3000, () =>
  console.log(`Node server listening at http://localhost:3000`)
);