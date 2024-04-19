import React from 'react'
import "./style.css"

function CardTemplate() {
    return (
        <div className="cardTemplateMain">
            <div className="cardTemplateImage">
                <img src="asdsd" alt="" className="cardTemplateImg" />
            </div>
            <div className="cardTemplateTitle">Beach Of Alens</div>
            <div className="cardTemplateDesc">
                <div className="cardTemplateDescData">Location : New Delhi</div>
                <div className="cardTemplateDescData">No. Of Rooms : 3</div>
                <div className="cardTemplateDescData">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde iure inventore alias illum distinctio. Autem.</div>
            </div>
        </div>
    )
}

export default CardTemplate