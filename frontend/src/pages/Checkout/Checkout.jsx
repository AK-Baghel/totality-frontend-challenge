import React, { useState } from 'react';
import './style.css';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import CheckoutItem from './CheckoutItem/CheckoutItem';

const Checkout = () => {

    return (
        <>
            <div className="checkoutMain">
                <div className="checkoutMainBox1">
                    <CheckoutItem />
                </div>
                <div className="checkoutMainBox2">
                    <CheckoutForm />

                </div>
            </div>
        </>
    )
};

export default Checkout;
