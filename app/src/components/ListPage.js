import React from 'react';
import { Link } from 'react-router';

export default class ListPage extends React.Component {
  componentWillMount() {
    this.findNotes('');
  }

  deleteNote(noteId) {
    const { deleteNote } = this.props;
    deleteNote(noteId).then( () => this.findNotes(this.searchInput.value) );
  }

  findNotes(queryString) {
    const { findNotesByTags } = this.props;
    findNotesByTags(queryString).then(() => console.log('done'));
  }

  render() {
    const { searching, foundNotes, addNewNote } = this.props;

    return (
      <div>
        <input type="text" ref={(ref) => this.searchInput = ref} 
          onChange={(e) => this.findNotes(e.target.value)}/>
        <span>{searching? 'searching' : ''}</span>
        <div>
          <button onClick={() => addNewNote()}>Add new note</button>
          {foundNotes.map((note, index) =>
            <div key={index}>
              <div>Name: {note.name}</div>
              <div>Tags: {note.tags.join(', ')}</div>
              <Link to={`/notes/${note._id}`}>Open</Link>
              <button onClick={() => this.deleteNote(note._id)}>Delete this note</button>
              <hr/>
            </div>
          )}
        </div>
      </div>
    );
  }
}

// TODO Proptypes
