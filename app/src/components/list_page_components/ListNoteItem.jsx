/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }]*/

import React from 'react';
import { browserHistory } from 'react-router';

const ListNoteItem = ({ note, deleteNote }) => {
  const combinedClasses = `list-note-item ${note.isSecret ? 'list-note-item-secret' : ''}`;

  return (
    <div className={combinedClasses}>
      <h3 className="list-note-item-title">{note.name}</h3>
      <div className="list-note-item-author">Author: {note.owner}</div>
      <div
        className="list-note-item-created-at"
      >
        Created at: {(new Date(note.createdAt)).toLocaleString()}
      </div>
      <div
        className="list-note-item-updated-at"
      >
        Updated at: {(new Date(note.updatedAt)).toLocaleString()}
      </div>
      <div className="list-note-item-tags">Tags: {note.tags.join(', ')}</div>
      <div className="list-note-item-buttons">
        <button className="delete" onClick={() => deleteNote(note._id)}>
          <i className="fa fa-trash-o fa-lg" />
           &nbsp;Delete
        </button>
        <button className="save" onClick={() => browserHistory.push(`/notes/${note._id}`)}>
          <i className="fa fa-file-o fa-lg" />
          &nbsp;Open
        </button>
      </div>
    </div>
  );
};

ListNoteItem.propTypes = {
  note: React.PropTypes.object.isRequired,
  deleteNote: React.PropTypes.func.isRequired,
};

export default ListNoteItem;
