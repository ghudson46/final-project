import React from 'react'
import './Home.css'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import logo from '../img/logo1.jpg'

// import { useAuth0 } from '@auth0/auth0-react';
// import axios from 'axios';

function Home() {
    return (
        // <div>
        //     <h1>Welcome to our app</h1>
        //     <p>VideoParty is a text-chat application where users can collaborate in a group with a built-in screen share feature. </p>
        // </div>

        <>
           <Container id='bgColor' rounded fluid> 
            <Row>
                <Col sm={6}><Image src={logo} width={400} rounded /></Col>
                <Col sm={6}>
                    <Button variant="primary"  style={{verticalAlign: 'baseline'}}>Log In</Button>
                    {/* <br></br>
                    <Button variant="Info">Sign Up</Button>{' '} */}
                </Col>
            </Row>
           </Container>
        </>

    )
}

export default Home