import React from 'react'
import './Home.css'
import LoginButton from '../components/Authentication/LoginButton'
import LogoutButton from '../components/Authentication/LogoutButton'
import SignupButton from '../components/Authentication/SignupButton'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import logo from '../img/logo.png'

import { useAuth0 } from '@auth0/auth0-react';


function Home() {
    const { isAuthenticated } = useAuth0();
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
                <Col sm={6}><Image src={logo} height={300} width={330}/></Col>
                <Col sm={6}>
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