import React from 'react';
import { Link } from 'react-router';

export default class ListPage extends React.Component {
  componentWillMount() {
    this.findNotes('');
  }

  findNotes(queryString) {
    const { findNotesByTags } = this.props;
    findNotesByTags(queryString).then(() => console.log('done'));
  }

  render() {
    const { searching, foundNotes, addNewNote } = this.props;

    return (
      <div>
        <input type="text" onChange={(e) => this.findNotes(e.target.value)}/>
        <span>{searching? 'searching' : ''}</span>
        <div>
          <button onClick={() => addNewNote()}>Add new note</button>
          {foundNotes.map((note, index) =>
            <div key={index}>
              <div>Name: {note.name}</div>
              <div>Tags: {note.tags.join(', ')}</div>
              <Link to={`/notes/${note._id}`}>Open</Link>
              <hr/>
            </div>
          )}
        </div>
      </div>
    );
  }
}

// TODO Proptypes
