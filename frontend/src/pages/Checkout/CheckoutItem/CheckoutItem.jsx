import React from 'react'
import "./style.css"

function CheckoutItem() {
    return (
        <div className="checkoutItemMain">
            <div className="checkoutItemParent">Total Items</div>

            <div className="checkoutItemMainBox1Parent">
                <div className="checkoutItemBox1">
                    <div className="checkoutItemBox1Title">Beach in Alen <span className="checkoutCount">(2)</span></div>
                    <div className="checkoutItemBox1Price">₹ x 2343/-</div>
                </div>
                <div className="checkoutItemBox1">
                    <div className="checkoutItemBox1Title">Beach in Alen</div>
                    <div className="checkoutItemBox1Price">₹ x 2343/-</div>
                </div>
            </div>

            <div className="checkoutItemBox2">
                <div className="checkoutItemBox2Section">
                    <div className="checkoutItemBox2Section1">Subtotal</div>
                    <div className="checkoutItemBox2Section2">₹ 2938/-</div>
                </div>
                <div className="checkoutItemBox2Section">
                    <div className="checkoutItemBox2Section1">Coupon Code</div>
                    <div className="checkoutItemBox2Section2">Not Apply</div>
                </div>
            </div>

            <div className="checkoutItemBox3">
                <div className="checkoutItemBox3Total">TOTAL</div>
                <div className="checkoutItemBox3Cost">₹ 88998/-</div>
            </div>
        </div>
    )
}

export default CheckoutItem