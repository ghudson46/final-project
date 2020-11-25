import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

import { useAuth0 } from '@auth0/auth0-react';


// A container that renders every message
const Messages = ({ messages, name, img }) => {
  const { user } = useAuth0();
  console.log(messages)
  return (
    <ScrollToBottom className="messages" style={{backgroundColor: 'gray'}}>
      {messages.map((message, i) => <div key={i}><Message message={message} name={name} img={img} profile={user}/></div>)}
    </ScrollToBottom>
  );
}

export default Messages;