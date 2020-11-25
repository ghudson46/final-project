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

import './Chat.css';




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
      console.log(user.picture)
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
      <h2 style={{marginTop: '-5rem'}}>{room}</h2>
      <p>Search for a video by name or keyword</p>
        <span style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', flexWrap: 'wrap'}}>
        {/* <InfoBar room={room} /> */}

        <div className="videoContainer" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', maxWidth: '90%', marginTop: '-1rem', marginBottom: '5rem'}}>
              <VideoContainer />
        </div>

        <div className="outerContainer" id="chatContainer" style={{height: '16rem', maxWidth: '100%', border: '1px solid #31e89f', position: 'relative', left: '2%', marginTop: '-5rem'}}>

          <div className="container" style={{height: '15rem', overflowY: 'auto', marginBottom: '1rem', display: 'flex', flexDirection: 'column-reverse'}}>
              <Messages messages={messages} name={name} img={user.picture}/>
          </div>
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} style={{marginTop: '100rem'}}/>

          <TextContainer users={users}/>
        </div>

        </span>
    
 
      </>
    ) :
    (
      <h1>User is not authenticated</h1>
    )
  );
}

export default Chat;