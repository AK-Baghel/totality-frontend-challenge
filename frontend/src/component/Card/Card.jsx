import React from 'react'
import CardTemplate from './CardTemplate/CardTemplate'
import "./style.css"
import { useContext } from 'react'
import { Context } from '../Context/AppContext'

function Card() {
    const { item, userItem, privateToggle } = useContext(Context);

    return (
        <>
            <div className="cardParent">
                <div className="cardMain">
                    {
                        !privateToggle ?
                            item.map((item, index) => {
                                return (
                                    <CardTemplate key={index} id={item._id} img={item.img} title={item.title} location={item.location} rooms={item.rooms} desc={item.desc} price={item.price} />
                                )
                            })
                            :
                            userItem.map((item, index) => {
                                return (
                                    <CardTemplate key={index} id={item._id} img={item.img} title={item.title} location={item.location} rooms={item.rooms} desc={item.desc} price={item.price} fav={item.fav} />
                                )
                            })
                    }

                </div>
            </div>
        </>
    )
}

export default Card