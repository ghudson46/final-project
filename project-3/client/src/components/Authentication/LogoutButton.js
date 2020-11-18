import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function LogoutButton() {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <button onClick={() => logout({
                returnTo: window.location.origin,
            })} style={{marginLeft: '2rem'}}>
            Log Out
        </button>
        )
    )
}

export default LogoutButton