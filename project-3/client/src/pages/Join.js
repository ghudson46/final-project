import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
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
  }, [])

  function loadRooms() {
    API.getRooms()
      .then(res => {
        setRooms(res.data);
        console.log(rooms)
      }).catch(err => console.log(err));
  };

  // const handleChange = (event) => {
  //   setRoom(event.target.value)
  // }

//   const handleSubmit = (event) => {
//     if (!nickname || !room) {
//       event.preventDefault();
//   }
// }
  
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

{/* <div className="joinInnerContainer">
        <h1 className="heading">Join A Room</h1>
        {/* <div>
          <p>welcome, {nickname}! Enter an existing room's name to join!</p>
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={handleChange} />
        </div>
        <Link onClick={handleSubmit} to={`/chat?name=${nickname}&room=${room}`}>
          <button type="button" class="btn btn-primary">Hello</button>
          <button className={'button mt-20'} type="submit">Join Room</button>
        </Link> */}