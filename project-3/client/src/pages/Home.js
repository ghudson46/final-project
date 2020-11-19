import React from 'react'
import LogoutButton from '../components/Authentication//LogoutButton'
import './Home.css'
// import { useAuth0 } from '@auth0/auth0-react';
// import axios from 'axios';

function Home() {
    return (
        <div>
            <h1>Welcome to our app</h1>
            <p>VideoParty is a text-chat application where users can collaborate in a group with a built-in screen share feature. </p>
            <LogoutButton />
        </div>
    )
}

export default Home