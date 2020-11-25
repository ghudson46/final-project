import React from "react";

function RoomList({ children }) {
  return (
    <div>
      <ul style={{listStyleType: 'none', color: 'black', textDecoration: 'none'}}>{children}</ul>
    </div>
  );
}

export default RoomList;