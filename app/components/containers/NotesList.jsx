import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotesList extends Component {
  createList() {
    return this.props.notes.map((note) => {
      return (
        <li key={ note.id } className="saved-notes-li"> { note.name } </li>
      );
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

function mapStateToProps(state) {
  //What is returned here will show up as props in our list container
  return {
    notes: state.notes
  };
}

export default connect(mapStateToProps)(NotesList);