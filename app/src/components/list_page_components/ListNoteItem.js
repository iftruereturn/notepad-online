import React from 'react';
import { Link } from 'react-router';

const ListNoteItem = ({ note, deleteNote }) => (
  <div className="list-note-item">
    <h3>{note.name}</h3>
    <div>Author: {note.owner}</div>
    <div>Created: {(new Date(note.saved)).toLocaleString()}</div>
    <div>Updated: {(new Date(note.updated)).toLocaleString()}</div>
    <div>Tags: {note.tags.join(', ')}</div>
    <Link to={`/notes/${note._id}`}>Open</Link>
    <button onClick={() => deleteNote(note._id)}>Delete</button>
  </div>
);

export default ListNoteItem;