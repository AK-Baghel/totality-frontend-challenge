import React, { useState } from "react"
import Filter from "../../component/Filter/Filter"
import "./style.css"
import Card from "../../component/Card/Card"

import { useContext } from 'react';
import { Context } from "../../component/Context/AppContext";
const Home = () => {
    const { item } = useContext(Context);
    const [totalResult, setTotalResult] = useState(item.length)
    return (
        <div className="homeMain">
            <Filter />
            <div className="homeResult">Total Result : <span className="homeResultValue">{totalResult}</span></div>
            <Card />

        </div>
    )
}

export default Home