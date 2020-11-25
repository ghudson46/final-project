import React from "react";

function Room({ children }) {
  return <li style={{width: '140px'}} className="roomLink"><button>{children}</button></li>;
}

export default Room