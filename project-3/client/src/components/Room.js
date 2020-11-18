import React from "react";

function Room({ children }) {
  return <li style={{listStyleType: 'none', textDecoration: 'none', color:'black'}}>{children}</li>;
}

export default Room