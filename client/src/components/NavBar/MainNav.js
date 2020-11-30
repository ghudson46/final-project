import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { useLocation } from 'react-router-dom'

function MainNav() {
    const location = useLocation();
    return (
        <Nav fill className="justify-content-end" style={{}}>
            <Nav.Item style={{margin: '0 -1rem 0 -1rem'}}>
                <Nav.Link href="/" className={location.pathname === "*" && "active"}><button>Home</button></Nav.Link>
            </Nav.Item>
            <Nav.Item style={{margin: '0 -1rem 0 -1rem'}}>
                <Nav.Link href="/profile" className={location.pathname === "/profile" && "active"}><button>Profile</button></Nav.Link>
            </Nav.Item>
            <Nav.Item style={{margin: '0 -1rem 0 -1rem'}}>
                <Nav.Link href="/join" className={location.pathname === "/join" && "active"}><button>Join</button></Nav.Link>
            </Nav.Item>
            <Nav.Item style={{margin: '0 -1rem 0 -1rem'}}>
                <Nav.Link href="/create" className={location.pathname === "/create" && "active"}><button>Create</button></Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default MainNav