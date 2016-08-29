import React, { Component } from 'react';

export default class NotesList extends Component {

  createList() {
    return this.props.notes.map(note => {
      return <li key={ note.id } className="saved-notes-li"> { note.name } </li>
    })
  }

  render() {
    return (
      <ul className="saved-notes-ul">
        { this.createList() }
      </ul>
    );
  };

}