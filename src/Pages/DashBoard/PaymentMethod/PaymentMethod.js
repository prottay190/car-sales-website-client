import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutFrom from './CheckOutFrom';

const stripePromise = loadStripe(`${process.env.PUBLICE_KEY}`);
const PaymentMethod = () => {
    return (
        <div>
            <h2>Payment </h2>
            <Elements stripe={stripePromise}>
                <CheckOutFrom />
            </Elements>
        </div>
    );
};

export default PaymentMethod;