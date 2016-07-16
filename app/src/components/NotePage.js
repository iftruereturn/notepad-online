import React from 'react';
import { Link } from 'react-router';

export default class NotePage extends React.Component {
  componentDidMount() {
    this.fetchData();    
  }

  fetchData() {
    const { noteId, fetchNote } = this.props;
    fetchNote(noteId).then(() => console.log('done'));
  }

  render() {
    const { noteId, name, value, tags, saving, fetching,
      changeName, changeValue, changeTags, saveNoteToServer } = this.props;

    console.log(this.props);

    return (
      <div>
        <Link to={'/notes'}>Back to list</Link>
        <h1>{name}</h1>
        <input type="text" value={name} 
          onChange={(e) => changeName(e.target.value)}/>
        <textarea name="" id="" cols="30" rows="10"
          value={value} onChange={(e) => changeValue(e.target.value)}></textarea>
        <input type="text" value={tags} 
          onChange={(e) => changeTags(e.target.value)}/>
        <button onClick={() => saveNoteToServer(noteId)}>{(saving)? 'saving...' : 'Save note'}</button>
      </div>
    );    
  }
}

// TODO Proptypes