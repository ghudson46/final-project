import React from 'react'
import LogoutButton from '../components/Authentication//LogoutButton'
// import { useAuth0 } from '@auth0/auth0-react';
// import axios from 'axios';

function Home() {
    return (
        <div>
            <h1>Welcome to our app</h1>
            <LogoutButton />
        </div>
    )
}

export default Home