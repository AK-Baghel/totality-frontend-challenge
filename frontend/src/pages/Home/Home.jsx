import React from "react"
import Filter from "../../component/Filter/Filter"
import "./style.css"
import Card from "../../component/Card/Card"

const Home = () => {
    return (
        <div className="homeMain">
            <Filter />
            <div className="homeResult">Total Result : <span className="homeResultValue">761</span></div>
            <Card />

        </div>
    )
}

export default Home