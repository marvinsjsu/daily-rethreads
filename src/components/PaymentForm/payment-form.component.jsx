import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import FormButton, { BUTTON_TYPE_CLASSNAMES } from '../FormButton/form-button.component';

import { selectCartTotal } from '../../selectors/cart.selectors';
import { selectCurrentUser } from '../../selectors/user.selectors';

import { PaymentFormContainer, FormContainer } from './payment-form.styles.jsx';

const PaymentForm = () => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const stripe = useStripe();
  const elements = useElements();

  const onSubmitPaymentHandler = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then(res => res.json());

    const { client_secret } = response.paymentIntent;

    console.log({ client_secret });
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        }
      }
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert('Payment Successful!');
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={onSubmitPaymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <FormButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSNAMES.inverted}
        >
          Pay now
        </FormButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
