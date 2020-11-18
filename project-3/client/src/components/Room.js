import React from "react";

function Room({ children }) {
  return <li className="list-group-item" style={{textDecoration: 'none', color:'black'}}>{children}</li>;
}

export default Room