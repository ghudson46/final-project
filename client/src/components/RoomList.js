import React from "react";

function RoomList({ children }) {
  return (
    <div>
      <ul style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', listStyleType: 'none'}}>{children}</ul>
    </div>
  );
}

export default RoomList;