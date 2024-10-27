import React, { useEffect, useState, useContext } from 'react';
import CartSection1 from './CartSection1/CartSection1';
import { MdDelete } from "react-icons/md";
import "./style.css";
import { useNavigate } from 'react-router-dom';
import { Context } from '../../component/Context/AppContext';

function Cart() {
    const { cart, loginId, setcartNewItemsArr, cartItemsArr } = useContext(Context);
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
    };

    const handleDelete = (itemId) => {
        console.log(" ");
    };

    return (
        <div className="cartMain">
            <div className="cartBox1">
                <div className="cartSection1Box1">
                    <div className="cartSection1Box1Head">Shopping Cart</div>
                    <div className="cartSection1Box1Head">{cartItemsArr.length} Items</div>
                </div>
                <div className="cartSection1Box2">
                    <div className="cartSection1Box2Sno">#</div>
                    <div className="cartSection1Box2Details">Property Details</div>
                    <div className="cartSection1Box2Quantity">Quantity</div>
                    <div className="cartSection1Box2Price">Price</div>
                    <div className="cartSection1Box2Del"><MdDelete /></div>
                </div>
                <div className="scrollBox">
                    {cartItemsArr.map((item, index) => (
                        <CartSection1
                            key={index}
                            index={index}
                            title={item.title}
                            location={item.location}
                            rooms={item.rooms}
                            price={item.price}
                            onDelete={() => handleDelete(item.id)}
                        />
                    ))}
                </div>
                <div className="cartFooter">
                    <div className="cartFooterPrice">Total Price: ₹ {cartItemsArr.reduce((total, item) => total + item.price, 0)}</div>
                    <div className="cartFooterCheckout" onClick={handleCheckout}>Checkout</div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
