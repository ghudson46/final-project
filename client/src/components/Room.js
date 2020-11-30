import React, { useState } from "react";

import API from '../utils/API';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
library.add( faTrash )

function Room({ children, room }) {

  const [status, setStatus] = useState(false);

  const handleClick = () => {
    API.deleteRoom(room._id)
      .then(() => {
        window.location.reload();
        })
        .catch(err => console.log(err));
  };
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <li style={{width: '140px'}} className="roomLink"><button>{children}</button></li>
    <FontAwesomeIcon icon={faTrash} style={{color: 'white', cursor: 'pointer', margin: '1rem 0 0 1rem', height: '1rem', width: '1rem'}} onClick={handleClick} />;
    </div>
  )
}

export default Room