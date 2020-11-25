// Dependencies
import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import { useAuth0 } from '@auth0/auth0-react'

import './Chat.css'

// Components
import TextContainer from '../components/TextContainer/TextContainer';
import Messages from '../components/Messages/Messages';
import InfoBar from '../components/InfoBar/InfoBar';
import Input from '../components/Input/Input';
import VideoContainer from '../components/Video/VideoContainer';

import API from '../utils/API'


const ENDPOINT = 'http://localhost:3001';

// Create socket variable
let socket;

// Sets state
const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { user, isAuthenticated } = useAuth0();

  // Runs once on initial render and each time location.search changes
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    // Updates state with inputed room name and user name
    setRoom(room);
    setName(name)
    

    // User joins the room they entered
    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
      // save in mongodb
    });
  }, [location.search]);
  
  // componendtDidMount
  useEffect(() => {
    // Updates the messages each time a message is sent
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
      // Save in mongodb
    });
    
    // Uses room data to set users
    socket.on("roomData", ({ users }) => {
      setUsers(users);
      // pull users from mongodb
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    isAuthenticated ? (
      <>
    <span style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
    <div className="videoContainer" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <VideoContainer />
      </div>
    <div className="outerContainer" id="chatContainer">
      <InfoBar room={room} />
      <div className="innercontainer">
          <Messages messages={messages} name={name}/>
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
    </span>
    <div style={{margin: '5rem 15rem 0 0'}}>
    </div>
    </>
    ) :
    (
      <h1>User is not authenticated</h1>
    )
  );
}

export default Chat;