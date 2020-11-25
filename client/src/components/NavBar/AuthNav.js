import React from 'react'
import LoginButton from '../Authentication/LoginButton'
import SignupButton from '../Authentication/SignupButton.js'

import Nav from 'react-bootstrap/Nav'

function AuthNav() {
    return (
        <div>
            <Nav fill variant="pills" style={{display: 'fllex', justifyContent: 'center'}}>
                <LoginButton />
                <SignupButton />
            </Nav>
        </div>
    )
}

export default AuthNav