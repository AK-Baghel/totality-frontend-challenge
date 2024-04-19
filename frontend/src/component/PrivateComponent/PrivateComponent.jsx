import React from 'react'
import { Outlet } from 'react-router-dom'
import { Context } from '../Context/AppContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

function PrivateComponent() {
    const { privateToggle } = useContext(Context);
    return (
        privateToggle ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateComponent