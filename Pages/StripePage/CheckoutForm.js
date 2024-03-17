import { useStripe, useState, useElements, PaymentElement } from "@stripe/react-stripe-js";

function CheckoutForm({ clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(PaymentElement),
        // Add other payment method details if necessary
      }
    });

    if (result.error) {
      console.log(result.error.message);
      // Show error to your customer (e.g., payment details incomplete)
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        console.log("Payment succeeded!");
        // Show a success message to your customer
      }
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}

export default CheckoutForm;
