import React, { useState } from 'react'
import "./style.css"
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from 'react';
import { Context } from '../../Context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function CardTemplate({ id, img, title, location, rooms, desc, price, fav = false }) {

    const { fetchCartItems, privateToggle, setUserItem, loginId } = useContext(Context);

    const cart = async (id) => {
        let result = await fetch(`http://localhost:8080/cart`, {
            method: 'post',
            body: JSON.stringify({ userId: loginId, itemId: id }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // if (result) {
        //     userItemHandle();
        // }
    }

    const checkLogin = (id) => {
        if (!privateToggle) {
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
            cart(id);
            fetchCartItems();
        }
    }

    const userItemHandle = async () => {
        const data = await fetch("http://localhost:8080/userItem");
        const result = await data.json();
        setUserItem(result)
    }

    const favHandle = async (id) => {
        let result = await fetch(`http://localhost:8080/favItem/${id}`, {
            method: 'put',
            body: JSON.stringify({ fav: !fav }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (result) {
            userItemHandle();
        }
    }

    return (
        <div className="cardTemplateMain">
            <ToastContainer />
            <div className="cardTemplateImage">
                <img src={img} alt="" className="cardTemplateImg" />
            </div>
            <div className="cardTemplateTitle">{title}</div>
            <div className="cardTemplateDesc">
                <div className="cardTemplateDescData1">{`Location : ${location}`}</div>
                <div className="cardTemplateDescData2">{`No. Of Rooms : ${rooms}`}</div>
                <div className="cardTemplateDescData">{desc}</div>
            </div>
            <div className="cardTemplateBox">
                <div className="cardTemplatePrice">{`₹ ${price}/-`}</div>
                <div className="cardTemplateButton" onClick={() => { checkLogin(id) }}>Book Now</div>
            </div>
            {
                <div className={`cardTempFavBox  ${fav ? 'cardTempFavBoxBorder' : ""}`} onClick={checkLogin}>
                    {
                        fav ?
                            <FaHeart className="cardTemplateFav" onClick={() => { favHandle(id) }} />
                            :
                            <FaRegHeart className='cardTemplateNoFav' onClick={() => { favHandle(id) }} />
                    }

                </div>
            }

        </div>
    )
}

export default CardTemplate