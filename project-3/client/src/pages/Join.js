import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import API from '../utils/API';
import RoomList from '../components/RoomList';
import Room from '../components/Room';

// Sets user name and room name when user signs on
function Join(props) {
  // const [name, setName] = useState('');
  const [rooms, setRooms] = useState([]);

  const { user, isAuthenticated } = useAuth0();

  let nickname; 

  if (isAuthenticated && !user.given_name) {
    nickname = user.nickname.replace(/[ ,.]/g, "");
  } else if (isAuthenticated && user.given_name) {
    nickname = user.given_name;
  }

  useEffect(() => {
    loadRooms()
  })

  function loadRooms() {
    API.getRooms()
      .then(res => {
        setRooms(res.data);
        console.log(rooms)
      }).catch(err => console.log(err));
  };
  
  return (
    <div>
        <h1>Join a room</h1>

        {rooms.length ? (
          <RoomList>
            {rooms.map(room => {
              return (
                <Room key={room._id}>
                  <a href={`/chat?name=${nickname}&room=${room.name}`}>
                    <strong>
                      {room.name}
                    </strong>
                  </a>
                </Room>
              );
            })}
          </RoomList>
        ) : (
          <h3>No rooms to Display</h3>
        )}
  </div>
  );
}

export default Join  