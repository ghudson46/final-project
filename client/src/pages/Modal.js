import React from "react";

export default class Modal extends React.Component {
  render() {
      if (!this.props.show) {
        return null;
      }
      return <div style={{color: 'red'}}>That search yielded no results. Create the room in the 'create tab'</div>
  }
}