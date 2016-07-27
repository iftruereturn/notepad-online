import React from 'react';
import { Link } from 'react-router';

const ListNoteItem = ({ note, deleteNote }) => (
  <div style={{border: '1px solid black', display: 'inline-block', margin: '20px', padding: '15px'}}>
    <div>Name: {note.name}</div>
    <div>Tags: {note.tags.join(', ')}</div>
    <Link to={`/notes/${note._id}`}>Open</Link>
    <button onClick={() => deleteNote(note._id)}>Delete this note</button>
  </div>
);

export default ListNoteItem;