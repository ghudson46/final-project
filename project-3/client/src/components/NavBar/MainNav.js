import React from 'react'

function MainNav() {
    return (
        <div>
            <ul style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', textDecoration: 'none', listStyle: 'none'}}>
                <a href="/"><li>Home</li></a>
                <a href="/profile"><li>Profile</li></a>
                <a href="/join"><li>Join</li></a>
                <a href="/create"><li>Create</li></a>
            </ul>
        </div>
    )
}

export default MainNav