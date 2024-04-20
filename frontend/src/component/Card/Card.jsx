import React from 'react'
import CardTemplate from './CardTemplate/CardTemplate'
import "./style.css"

function Card() {
    return (
        <>
            <div className="cardParent">
                <div className="cardMain">
                    <CardTemplate />
                    <CardTemplate />
                    <CardTemplate />
                    <CardTemplate />
                    <CardTemplate />
                </div>
            </div>
        </>
    )
}

export default Card