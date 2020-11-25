import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import "./TextContainer.css";

// Welcomes the user and shows them who else is in the room.
const TextContainer = ({ users }) => (
  <div className="textContainer" style={{textAlign: 'center'}}>
    {
      users
        ? (
          <div>
<<<<<<< HEAD
            <h3>Friends in room:</h3>
=======
            <h1 id="txtColor">People currently chatting:</h1>
>>>>>>> main
            <div className="activeContainer">
              <h3>
                {users.map(({name}) => (
                  <div key={name} className="activeItem" id="txtColor">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h3>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;