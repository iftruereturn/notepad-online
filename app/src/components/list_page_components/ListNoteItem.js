import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

const ListNoteItem = ({ note, deleteNote }) => {

  let combinedClasses = 'list-note-item ' + (note.isSecret ? 'list-note-item-secret' : '');

  return (
    <div className={combinedClasses}>
      <h3 className="list-note-item-title">{note.name}</h3>
      <div>Author: {note.owner}</div>
      <div>Created at: {(new Date(note.createdAt)).toLocaleString()}</div>
      <div>Updated at: {(new Date(note.updatedAt)).toLocaleString()}</div>
      <div className="list-note-item-tags">Tags: {note.tags.join(', ')}</div>
      {/*<Link to={`/notes/${note._id}`}>Open this note</Link>*/}
      <button className="save" onClick={() => browserHistory.push(`/notes/${note._id}`)}>Open</button>
      <button className="delete" onClick={() => deleteNote(note._id)}>Delete</button>
    </div>
  );
}

export default ListNoteItem;