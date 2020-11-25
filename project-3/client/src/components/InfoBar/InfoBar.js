import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import "./InfoBar.css";

// Proives users with info on current room
const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h3 id="roomTitle">ROOM: {room}</h3>
      <a href="/"><img src={closeIcon} alt="close icon"  id="closeButton"/></a>
      {/* <img className="onlineIcon" src={onlineIcon} alt="online icon" /> */}
    </div>
    <div className="rightInnerContainer">

    </div>
  </div>
);

export default InfoBar;