import React from "react";

function RoomList({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group" style={{listStyleType: 'none', color: 'black'}}>{children}</ul>
    </div>
  );
}

export default RoomList;