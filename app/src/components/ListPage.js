import React from 'react';

export default class ListPage extends React.Component {

  findNotes(queryString) {
    const { findNotesByTags } = this.props;
    findNotesByTags(queryString).then(() => console.log('done'));
  }

  render() {
    const { searching, foundNotes } = this.props;

    return (
      <div>
        <input type="text" onChange={(e) => this.findNotes(e.target.value)}/>
        <span>{searching? 'searching' : ''}</span>
        <div>
          {foundNotes.map((note, index) =>
            <div key={index}>
              <div>Name: {note.name}</div>
              <div>Tags: {note.tags}</div>
              <div>{note._id}</div>
              <hr/>
            </div>
          )}
        </div>
      </div>
    );
  }
}

// TODO Proptypes
