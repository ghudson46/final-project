import React, { useState, useEffect } from 'react';


import { useAuth0 } from '@auth0/auth0-react';
import API from '../utils/API';
import RoomList from '../components/RoomList';
import Room from '../components/Room';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './Join.css'


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
  }, []);

  function loadRooms() {
    API.getRooms()
      .then(res => {
        setRooms(res.data);
      }).catch(err => console.log(err));
  };

  useEffect(() => {
    console.log(rooms)
  }, [rooms])
  
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
          //<h3>No rooms to Display</h3>
          <>
            <style type="text/css">
              {`
                .Jumbtron-blue {
                  background-color: blue;
                }
              `}
            </style>
            <Jumbotron fluid bg='dark'>
              <Container> 
                <h1>No rooms to display</h1>
                <p>You can create a new room by clicking the button below:</p>
                <Button variant="secondary">Create</Button>{' '}
              </Container>
            </Jumbotron>
          </>
        
        )}
  </div>
  );
}

export default Join  