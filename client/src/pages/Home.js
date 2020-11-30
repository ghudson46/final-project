import React from 'react'
import './Home.css'
import LoginButton from '../components/Authentication/LoginButton'
import LogoutButton from '../components/Authentication/LogoutButton'
import SignupButton from '../components/Authentication/SignupButton'

import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';

import logo from '../img/logo.png'

import { useAuth0 } from '@auth0/auth0-react';


function Home() {
    const { isAuthenticated } = useAuth0();
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
                <Col sm={6}><Image src={logo} height={300} width={330}/></Col>
                <Col sm={6}>
                <p>KickBack is the perfect platform to hangout with your friends, without being in the same room. Watch a movie, share a youtube video, or simply just chat in a private room. <p style={{color: '#31e89f'}}>Just because you have to be 6 feet apart, doesn't mean you have to be apart.</p>
                </p>
                {isAuthenticated ? (
                    <LogoutButton />
                ):
                (
                    <div style={{}}>
                        <LoginButton />
                        <SignupButton />
                    </div>
                )}
                </Col>
        </div>

    )
}

export default Home