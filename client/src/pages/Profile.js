import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import RoomList from '../components/RoomList';
import Room from '../components/Room';
import API from '../utils/API';
import '../components/Room';

function Profile() {
    const [rooms, setRooms] = useState([]);
    const [room, setRoom] = useState('');
    const { user, isAuthenticated } = useAuth0();

    let nickname; 
    let userId = user.sub;

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
        <div>
            <img src={user.picture} alt={user.name} style={{borderRadius: '50%', height: '10rem', width: '10rem'}}/>
            <h2>{user.name}</h2>
            <p>{user.email}</p>

            <h1>Your Rooms</h1>
            {rooms.length ? (
            <RoomList>
                {rooms.map(room => {
                return (
                room.userId == user.sub && (
                    <Room key={room._id}>
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
        )
        : (
        <h1>
        user is not authenticated 
        </h1>
        )
    )
}

export default Profile