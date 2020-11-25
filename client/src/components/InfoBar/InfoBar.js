import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import "./InfoBar.css";

// Proives users with info on current room
const InfoBar = ({ room }) => (
<<<<<<< HEAD
  <div className="infoBar" style={{textAlign: 'center'}}>
    <div className="leftInnerContainer">
      <h3 id="roomTitle">ROOM: {room}</h3>
      <a href="/"><img src={closeIcon} alt="close icon"  id="closeButton"/></a>
      {/* <img className="onlineIcon" src={onlineIcon} alt="online icon" /> */}
    </div>
    <div className="rightInnerContainer">

=======
  <div className="infoBar">
    <div>
      <h3 id="roomTitle">ROOM: {room} <a href="/"><img src={closeIcon} alt="close icon"  id="closeButton"/></a></h3>
>>>>>>> main
    </div>
  </div>
);

export default InfoBar;

// Unused asset. Save incase use needed later:
// Green dot online icon.
// <img className="onlineIcon" src={onlineIcon} alt="online icon" />