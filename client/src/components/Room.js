import React from "react";

function Room({ children }) {
  return <li style={{border: '1px solid white', width: '140px', margin: '1rem 0 1rem 0'}} className="roomLink">{children}</li>;
}

export default Room