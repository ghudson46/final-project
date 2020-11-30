import React from "react";

export default class Modal extends React.Component {
  render() {
      if (!this.props.show) {
        return null;
      }
      return (
        <>
          <div style={{color: 'red'}}>There are no rooms that match that name. Click the button below to create it!</div>
          <a href="/create"><button>create</button></a>
        </>
      ) 
  }
}