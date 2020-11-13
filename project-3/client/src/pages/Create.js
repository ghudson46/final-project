import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

// Sets user name and room name when user signs on
function Create(props) {
  // const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const { user, isAuthenticated } = useAuth0();

  let nickname; 

  if (isAuthenticated && !user.given_name) {
    nickname = user.nickname.replace(/[ ,.]/g, "");
  } else if (isAuthenticated && user.given_name) {
    nickname = user.given_name;
  }

  function getRooms() {
    axios.get('/api/rooms')
    .then(res => {
      res.json();
    })
  }

  const handleChange = (event) => {
    setRoom(event.target.value);
  }

  const handleClick = (event) => {
    event.preventDefault();
    if (!room) {
      return;
    }
    upsertRoom({
      name: room,
      created_at: Date.now()
    });
  }

  function upsertRoom(roomData) {
    axios.post('/api/rooms', roomData)
    .then(getRooms);
  }


  


  
  return (
    isAuthenticated ? (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Create A Room</h1>
        <div>
          <p>welcome, {nickname}! Enter the name of the room you wish to create!</p>
        </div>
        <div>
          <input placeholder="Room" className="createInput mt-20" type="text" onChange={handleChange} />
        </div>
        <Link onClick={handleClick} to={`/chat?name=${nickname}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Create Room</button>
        </Link>
      </div>
    </div>
    ) :
    (
      <h1>User is not authenticated</h1>
    )
  );
}

export default Create;