import React, { useState } from 'react'
import axios from 'axios';
import API from '../utils/API';

function Books() {
  const [room, setRoom] = useState();

    const handleChange = (event) => {
        setRoom(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        if (room) {
          API.createRoom(room)
            .then(() => setRoom(''))
            .catch(err => console.log(err));
        }
      };

    console.log(room);

        return (
            <div className="joinOuterContainer">
            <div className="joinInnerContainer">
              <h1 className="heading">Create A Room</h1>
              <div>
              </div>
              <div>
                <input placeholder="Room" className="createInput mt-20" type="text" onChange={handleChange} />
              </div>
                <button className={'button mt-20'} type="submit" onClick={handleSubmit}>Create Room</button>
            </div>
          </div>
        )
}

export default Books
