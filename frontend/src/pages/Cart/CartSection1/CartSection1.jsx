import React from 'react'
import "./style.css"
import { IoCloseSharp } from "react-icons/io5";


function CartSection1() {
    return (
        <div className="cartSection1Main">


            <div className="cartSection1Box2">
                <div className="cartSection1Box2SnoBox">1</div>

                <div className="cartSection1Box2Details">
                    <div className="cartSection1Box2DetailsImage">
                        <img src="https://t3.ftcdn.net/jpg/02/71/08/28/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg" className='cartSection1Box2DetailsImg' alt="" />
                    </div>
                    <div className="cartSection1Box2DetailsBox">
                        <div className="cartSection1Box2DetailsTitle">ALice in Beach</div>
                        <div className="cartSection1Box2DetailsLocation">New Delhi</div>
                        <div className="cartSection1Box2DetailsRooms">Rooms 3</div>
                    </div>
                </div>
                <div className="cartSection1Box2QuantityBox">
                    <div className="cartSection1Box2QuantitySign">-</div>
                    <div className="cartSection1Box2QuantityCount">1</div>
                    <div className="cartSection1Box2QuantitySign">+</div>

                </div>
                <div className="cartSection1Box2PriceBox">
                    <div className="cartSection1Box2PriceBox">₹ 3899/-</div>
                </div>
                {/* <div className="cartSection1Box2PriceBox">
                    <div className="cartSection1Box2PriceBox">₹ 3899/-</div>
                </div> */}
                <div className="cartSection1Box2Cross"><IoCloseSharp /></div>



            </div>
        </div>
    )
}

export default CartSection1