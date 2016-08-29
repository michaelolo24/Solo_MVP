import React, { Component } from 'react';

export default class HomePage extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="main-search-box">
        <form action="POST" className="main-search-form">
          <input type="text" name="mainSearch" className="main-search-input" />
        </form>
      </div>
    );
  }
}