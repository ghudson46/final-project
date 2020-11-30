import React from 'react';

// Emoji library
import ReactEmoji from 'react-emoji';

// Creates a message based on the user name and text inputed
const Message = ({ message: { text, user }, name, img, profile }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  // User validation
  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  let capitalName = user.charAt(0).toUpperCase() + user.slice(1);



  return (
      // If local user sent the message message, renders the text inputed and the user's name
    isSentByCurrentUser
      ? (
        <div className="messageContainer" style={{display: 'flex', justifyContent: 'flex-start', borderRadius: '2rem', paddingLeft: '2rem', margin: '1rem', width: '75%', float: 'left', textAlign: 'left'}}>
          <img src={img} alt={profile.name} style={{borderRadius: '50%', height:'2.5rem', width: '2.5rem', marginTop: '.6rem', marginRight: '1rem'}}/>
      
          <div className="messageBox" style={{backgroundColor: '#31e89f', padding: '1rem 2rem 0 1rem', borderRadius: '2rem'}}>
            <p className="messageText" style={{marginLeft: '5px', color: 'black'}}>{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : 
        // Otherwhise, if message came from another user, renders the text in a different color and on other side of screen
        (
          <div className="messageContainer" style={{display: 'flex', justifyContent: 'flex-end', borderRadius: '2rem', paddingRight: '2rem', margin: '1rem', width: '55%', float: 'right'}}>
          <div style={{display: 'flex', flexDirection: 'column', padding: '0', margin: '0'}}>
            <p style={{marginBottom: '-.5rem', fontSize: '1rem', float: 'right'}}>{capitalName}</p>
            <div className="messageBox" style={{backgroundColor: '#31e8e8', padding: '1rem 1rem 0 2rem', borderRadius: '2rem'}}>
            <p className="sentText pl-10" style={{color: 'black'}}>{ReactEmoji.emojify(text)}</p>
            </div>
          </div>
            {user === 'admin' && <img src='https://shanghai-date.com/uploads/g/t/t/h/q2t34kjldqrqv0pl7ihh.png' alt={user.name} style={{borderRadius: '50%', height: '2.5rem', width: '2.5rem', marginTop: '2rem', marginRight: '-1.5rem', marginLeft: '1rem'}}/> }
            {user !== 'admin' && <div style={{backgroundColor: '#31e89f', padding: '.3rem .5rem 0 .5rem', fontWeight: '600', borderRadius: '50%', height: '2.5rem', width: '2.5rem', marginRight: '-1.5rem', marginLeft: '1rem', marginTop: '2rem'}}>{user.charAt(0).toUpperCase()}</div>}
            
          </div>
        )
  );
}

export default Message;