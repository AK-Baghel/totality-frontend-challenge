import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
export const Context = createContext();

function AppContext({ children }) {
    const [privateToggle, setPrivateToggle] = useState(false)
    const [item, setItem] = useState([]);
    const [userItem, setUserItem] = useState([]);
    const [loginId, setLoginId] = useState("")
    const [cart, setCart] = useState([])


    const [cartNewItemsArr, setcartNewItemsArr] = useState([])

    const [cartItemsArr, setCartItemsArr] = useState([]);





    const fetchCartItems = async () => {
        const cartItemIds = cart
            .filter(item => item.userId === loginId)
            .map(item => item.itemId);

        const promises = cartItemIds.map(async id => {
            try {
                const response = await fetch(`http://localhost:8080/cartItems`, {
                    method: 'post',
                    body: JSON.stringify({ id }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch cart items');
                }

                return response.json();
            } catch (error) {
                console.error('Error fetching data:', error);
                return null;
            }
        });

        try {
            const items = await Promise.all(promises);
            const filteredItems = items.filter(item => item !== null);
            setCartItemsArr(filteredItems);
            setcartNewItemsArr(cartItemsArr)
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    useEffect(() => {
        fetchCartItems();
    }, [cart, loginId]);










    const itemHandle = async () => {
        const data = await fetch("http://localhost:8080/item");
        const result = await data.json();
        setItem(result)
    }
    const cartHandle = async () => {
        const data = await fetch("http://localhost:8080/cart");
        const result = await data.json();
        setCart(result)
    }
    const userItemHandle = async () => {
        const data = await fetch("http://localhost:8080/userItem");
        const result = await data.json();
        setUserItem(result)
    }

    useEffect(() => {
        itemHandle();
        userItemHandle();
        cartHandle();
    }, [])

    return (
        <>
            <Context.Provider value={
                { fetchCartItems, cartItemsArr, setcartNewItemsArr, cartNewItemsArr, cart, setLoginId, loginId, userItem, setUserItem, item, privateToggle, setPrivateToggle, userItemHandle }
            }>
                {children}
            </Context.Provider>
        </>
    )
}

export default AppContext