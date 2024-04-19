import React, { useState } from 'react'
import "./style.css"

function Filter() {
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState('')
    const [price1, setPrice1] = useState('')
    const [price2, setPrice2] = useState('')
    const [rooms, setRooms] = useState('')

    const setPriceFunc = (e) => {
        let range = e.target.value;
        setPrice(range)
        let numbers = range.split("-");

        setPrice1(parseInt(numbers[0]))
        setPrice2(parseInt(numbers[1]))

        console.log(price1, price2);

    }

    const clearHandle = () => {
        setLocation("")
        setPrice("")
        setRooms("")
    }

    return (
        <div className="filterMain">
            {/* <div className="filterTitle">Filter</div> */}

            <div className="filterbox1">

                <div className="filterSetBox">
                    <div className="filterSetName">Location</div>
                    <select value={location} className='filterSet' onChange={(e) => { setLocation(e.target.value) }}>
                        <option value="">Select Location</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Noida">Noida</option>
                        <option value="Gurugram">Gurugram</option>
                        <option value="Mathura">Mathura</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bengluru">Bengluru</option>
                    </select>
                </div>


                <div className="filterSetBox">
                    <div className="filterSetName">Price</div>
                    <select value={price} className='filterSet' onChange={setPriceFunc}>
                        <option value="">Select Price</option>
                        <option value="0-999">0-999</option>
                        <option value="1000-1999">1000-1999</option>
                        <option value="2000-2999">2000-2999</option>
                        <option value="3000-3999">3000-3999</option>
                        <option value="4000-4999">4000-4999</option>
                        <option value="5000+">5000+</option>
                    </select>
                </div>


                <div className="filterSetBox">
                    <div className="filterSetName">Rooms</div>
                    <select value={rooms} className='filterSet' onChange={(e) => { setRooms(e.target.value) }}>
                        <option value="">Select Rooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

            </div>

            <div className="filterBox2">
                <div className="filterboxButtonClear" onClick={clearHandle}>Clear</div>
                <div className="filterboxButton">Apply</div>
            </div>

        </div>
    )
}

export default Filter