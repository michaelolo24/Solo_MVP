import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1> AgoraU Logo Here </h1>
        {this.props.children}
      </div>
    );
  };
}
