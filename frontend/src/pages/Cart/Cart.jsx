import React from 'react'
import CartSection1 from './CartSection1/CartSection1'
import { MdDelete } from "react-icons/md";
import "./style.css"

function Cart() {
    return (
        <div className="cartMain">
            <div className="cartBox1">
                <div className="cartSection1Box1">
                    <div className="cartSection1Box1Head">Shoping Cart</div>
                    <div className="cartSection1Box1Head">3 Items</div>
                </div>
                <div className="cartSection1Box2">
                    <div className="cartSection1Box2Sno">#</div>
                    <div className="cartSection1Box2Details">Property Details</div>
                    <div className="cartSection1Box2Quantity">Quantity</div>
                    <div className="cartSection1Box2Price">Price</div>
                    {/* <div className="cartSection1Box2Total">Total</div> */}
                    <div className="cartSection1Box2Del"><MdDelete /></div>

                </div>
                <div className="scrollBox">

                    <CartSection1 />
                    <CartSection1 />
                    <CartSection1 />
                    <CartSection1 />
                </div>

                <div className="cartFooter">
                    <div className="cartFooterPrice">Total Price : ₹ 3899/-</div>
                    <div className="cartFooterCheckout">Checkout</div>
                </div>

            </div>
        </div>
    )
}

export default Cart