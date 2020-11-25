import React from "react";

function RoomList({ children }) {
  return (
    <div>
      <ul style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>{children}</ul>
    </div>
  );
}

export default RoomList;