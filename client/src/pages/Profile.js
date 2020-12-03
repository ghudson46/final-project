import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import RoomList from '../components/RoomList';
import Room from '../components/Room';
import API from '../utils/API';
import '../components/Room';

import './Profile.css';

function Profile() {
    const [rooms, setRooms] = useState([]);
    // const [room, setRoom] = useState('');
    const { user, isAuthenticated } = useAuth0();

    let nickname; 

    if (isAuthenticated && !user.given_name) {
        nickname = user.nickname.replace(/[ ,.]/g, "");
    } else if (isAuthenticated && user.given_name) {
        nickname = user.given_name;
    }

    useEffect(() => {
        loadRooms();
      }, []);

    function loadRooms() {
        API.getRooms()
          .then(res => {
            setRooms(res.data);
          }).catch(err => console.log(err));
      };


    return (
        isAuthenticated ? (
        <span  className="profileContainer" style={{display:'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <div className="userInfo">
                <img src={user.picture}  referrerpolicy="no-referrer" alt={user.name} style={{borderRadius: '50%', height: '10rem', width: '10rem'}}/>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>

            <div className="userRooms" style={{listStyleType: 'none'}}>
                <h1>Your Rooms</h1>
                {rooms.length ? (
                <RoomList>
                    {rooms.map(room => {
                    return (
                    room.userId === user.sub && (
                        <Room key={room._id} room={room}>
                        <a href={`/chat?name=${nickname}&room=${room.name}`} style={{textDecoration: 'none'}}>
                            <strong style={{textDecoration: 'none'}}>
                            {room.name}
                            </strong>
                        </a>
                        </Room>
                        )
                    );
                    })}
                </RoomList>
                ) : (
                <h3>No rooms to Display</h3>
                )}
            </div>
        </span>
        )
        : (
        <h1>
        You are not logged in 
        </h1>
        )
    )
}

export default Profile