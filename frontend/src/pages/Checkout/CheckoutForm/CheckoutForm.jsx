import React, { useState } from 'react';
import './style.css';

const CheckoutForm = () => {
    // State variables to store form data
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if any field is empty
        if (!firstName || !lastName || !email || !address || !city || !postalCode || !country || !cardNumber || !expiryDate || !cvv) {
            alert("Please fill in all fields.");
            return;
        }

        // Here you can send the form data to your backend or perform any other actions
        console.log('Form submitted with data:', {
            firstName,
            lastName,
            email,
            address,
            city,
            postalCode,
            country,
            cardNumber,
            expiryDate,
            cvv
        });
        // Reset form fields after submission
        setFirstName('');
        setLastName('');
        setEmail('');
        setAddress('');
        setCity('');
        setPostalCode('');
        setCountry('');
        setCardNumber('');
        setExpiryDate('');
        setCvv('');
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2 className='formHead'>Billing Information</h2>
            <div className="name-container">
                <label>
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
            </div>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                Address:
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </label>
            <div className="name-container">

                <label>
                    City:
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </label>
                <label>
                    Postal Code:
                    <input
                        type="text"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                </label>
            </div>
            {/* <label>
                Country:
                <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
            </label> */}

            <h2 className='formHead'>Payment Information</h2>
            <label>
                Card Number:
                <input
                    type="text"
                    value={cardNumber}
                    placeholder="xxxx xxxx xxxx xxxx"
                    onChange={(e) => setCardNumber(e.target.value)}
                />
            </label>
            <div className="name-container">

                <label>
                    Expiry Date:
                    <input
                        type="date"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                    />
                </label>
                <label>
                    CVV:
                    <input
                        type="password"
                        value={cvv}
                        onChange={(e) => { setCvv(e.target.value) }}
                    />
                </label>
            </div>

            <button type="submit">Pay Now</button>
        </form>
    );
};

export default CheckoutForm;
