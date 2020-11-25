import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { useLocation } from 'react-router-dom'
import LogoutButton from '../Authentication//LogoutButton'

function MainNav() {
    const location = useLocation();
    return (
        <Nav fill className="justify-content-end" style={{display: 'fllex', justifyContent: 'space-around'}}>
            <Nav.Item>
                <Nav.Link href="/" className={location.pathname === "*" && "active"}><button>Home</button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/profile" className={location.pathname === "/profile" && "active"}><button>Profile</button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/join" className={location.pathname === "/join" && "active"}><button>Join</button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/create" className={location.pathname === "/create" && "active"}><button>Create</button></Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default MainNav