import React, { useState } from 'react'
import { createContext } from 'react'
export const Context = createContext();

function AppContext({ children }) {
    const [privateToggle, setPrivateToggle] = useState(true)

    return (
        <>
            <Context.Provider value={
                { privateToggle, setPrivateToggle }
            }>
                {children}
            </Context.Provider>
        </>
    )
}

export default AppContext