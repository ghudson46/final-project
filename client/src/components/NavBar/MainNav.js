import React from 'react'
import ReactTooltip from 'react-tooltip'
import Nav from 'react-bootstrap/Nav'
import { useLocation } from 'react-router-dom'
import LogoutButton from '../Authentication//LogoutButton'
import { ImHome } from 'react-icons/im'
import { FaUserAlt } from 'react-icons/fa'
import { GoSignIn } from 'react-icons/go'
import { RiVideoAddFill } from 'react-icons/ri'


function MainNav() {
    const location = useLocation();
    return (
        <Nav fill className="justify-content-end" style={{}}>
            <Nav.Item style={{margin: '0 -1rem 0 -1rem'}}>
                <Nav.Link href="/" className={location.pathname === "*" && "active"}><p data-tip="Home"><button className="placeholder"><ImHome /></button></p><ReactTooltip /></Nav.Link>
            </Nav.Item>
            <Nav.Item style={{margin: '0 -1rem 0 -1rem'}}>
                <Nav.Link href="/profile" className={location.pathname === "/profile" && "active"}><p data-tip="Profile"><button><FaUserAlt /></button></p><ReactTooltip /></Nav.Link>
            </Nav.Item>
            <Nav.Item style={{margin: '0 -1rem 0 -1rem'}}>
                <Nav.Link href="/join" className={location.pathname === "/join" && "active"}><p data-tip="Join Room"><button><GoSignIn /></button></p><ReactTooltip /></Nav.Link>
            </Nav.Item>
            <Nav.Item style={{margin: '0 -1rem 0 -1rem'}}>
                <Nav.Link href="/create" className={location.pathname === "/create" && "active"}><p data-tip="Create Room"><button><RiVideoAddFill /></button></p><ReactTooltip /></Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default MainNav