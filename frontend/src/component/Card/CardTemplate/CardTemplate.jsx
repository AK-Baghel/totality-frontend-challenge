import React, { useState } from 'react'
import "./style.css"
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from 'react';
import { Context } from '../../Context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function CardTemplate() {
    const [fav, setfav] = useState(false)
    const { privateToggle } = useContext(Context);
    const checkLogin = () => {
        if (privateToggle) {
            toast.error(`Login Requied`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            setfav(!fav)
        }
    }

    return (
        <div className="cardTemplateMain">
            <ToastContainer />
            <div className="cardTemplateImage">
                <img src="https://t3.ftcdn.net/jpg/02/71/08/28/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg" alt="" className="cardTemplateImg" />
            </div>
            <div className="cardTemplateTitle">Beach Of Alens</div>
            <div className="cardTemplateDesc">
                <div className="cardTemplateDescData1">Location : New Delhi</div>
                <div className="cardTemplateDescData2">No. Of Rooms : 3</div>
                <div className="cardTemplateDescData">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde iure inventore alias illum distinctio. Autem.</div>
            </div>
            <div className="cardTemplateBox">
                <div className="cardTemplatePrice">₹ 3899/-</div>
                <div className="cardTemplateButton" onClick={checkLogin}>Book Now</div>
            </div>
            {
                <div className={`cardTempFavBox  ${fav ? 'cardTempFavBoxBorder' : ""}`} onClick={checkLogin}>
                    {
                        fav ?
                            <FaHeart className="cardTemplateFav" />
                            :
                            <FaRegHeart className='cardTemplateNoFav' />
                    }

                </div>
            }

        </div>
    )
}

export default CardTemplate