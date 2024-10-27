import React from 'react'
import CardTemplate from '../../component/Card/CardTemplate/CardTemplate'
import { useContext } from 'react'
import { Context } from '../../component/Context/AppContext'

function Favourite() {
    const { userItem } = useContext(Context);


    return (
        <div className="cardParent">
            <div className="cardMain">
                {
                    userItem.map((item, index) => {
                        const a = item.fav;
                        return (

                            a ?
                                < CardTemplate key={index} id={item._id} img={item.img} title={item.title} location={item.location} rooms={item.rooms} desc={item.desc} price={item.price} fav={item.fav} />
                                : ""
                        )
                    })

                }
            </div>
        </div >
    )
}

export default Favourite