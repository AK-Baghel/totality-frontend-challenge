import React, { useState, useEffect } from "react"
import "./style.css"
import { FaBars } from "react-icons/fa6"
import { FiLogOut } from "react-icons/fi";


import { IoClose } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

import { useContext } from "react"
import { Context } from "../Context/AppContext"

const Header = () => {
    const { privateToggle, setPrivateToggle } = useContext(Context);


    const location = useLocation();
    const [show, setShow] = useState(true);
    const [popUp, setPopUp] = useState(false);


    // const [uploadedData, setUploadedData] = useState([]);

    // const fetchProductData = async () => {
    //     try {
    //         const response = await fetch('http://localhost:8080/uploadData');
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch data');
    //         }
    //         const data = await response.json();
    //         setUploadedData(data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }


    const toggleBar = () => {
        setShow(!show);
    }
    const navigate = useNavigate();

    const routing = (para) => {
        navigate(para);
        setShow(true)
        setPopUp(false)
    }

    // const openPage = (value) => {
    //     navigate(`/product/${value}`);
    //     window.scrollTo(0, 0)
    //     setPopUp(false)
    //     setShow(true)
    // }

    // useEffect(() => {
    //     fetchProductData();
    // }, [])


    return (
        <div className="headerContainer">
            <div className="headerItems" >

                <div className="headerLogo" onClick={() => { routing("/") }}>
                    <div className="headerLogoImg">Property Rental</div>
                </div>

                <div className={`headerAllItem ${show ? "headerMobile " : ""}`}>

                    <div className="headerRight">

                        <div className={`headerItem hoverUnderline ${location.pathname === "/" ? "active" : ""}`} onClick={() => { routing("/") }}>HOME</div>
                        <div className={`headerItem hoverUnderline ${location.pathname === "/favourite" ? "active" : ""}`} onClick={() => { routing("/favourite") }} >Favourite</div>
                        <div className={`headerItem hoverUnderline ${location.pathname === "/cart" ? "active" : ""}`} onClick={() => { routing("/cart") }} >Cart <sup className="superScript">(5)</sup></div>
                        {
                            !show ?

                                !privateToggle ?
                                    <div className={`headerItem hoverUnderline ${location.pathname === "/login" || location.pathname === "/signup" ? "active" : ""}`} onClick={() => { routing("/login") }}>LOGIN/SIGNUP</div>
                                    :
                                    <>
                                        <div className="userMain">
                                            <div className="userChar">A</div>
                                            <div className="userName">Ankit Kumar</div>
                                            <div className="userLogout" onClick={() => { navigate('/login'); setPrivateToggle(false) }}><FiLogOut /></div>
                                        </div>
                                    </>
                                :
                                ""
                        }
                    </div>
                </div>

                {

                    !privateToggle ?
                        <div className={`hidingCss headerItem hoverUnderline ${location.pathname === "/login" || location.pathname === "/signup" ? "active" : ""}`} onClick={() => { routing("/login") }}>LOGIN/SIGNUP</div>
                        :
                        <>
                            <div className="userMain hidingCss">
                                <div className="userChar">A</div>
                                <div className="userName">Ankit Kumar</div>
                                <div className="userLogout" onClick={() => { navigate('/login'); setPrivateToggle(false) }}><FiLogOut /></div>
                            </div>
                        </>

                }


            </div>
            {
                show ? <FaBars className="headerBar" onClick={toggleBar} /> : <IoClose className=" headerBar headerCross" onClick={toggleBar} />
            }


        </div>

    )
}
export default Header;