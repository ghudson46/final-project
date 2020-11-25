import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './LogoutButton.css'

function LogoutButton() {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div onClick={() => logout({
                returnTo: window.location.origin,
            })}>
            Log Out
        </div>
        )
    )
}

export default LogoutButton