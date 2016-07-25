import React from 'react';
import { Link } from 'react-router';
import NameInput from './note_page_components/NameInput';
import NoteTextInput from './note_page_components/NoteTextInput';
import TagsInput from './note_page_components/TagsInput';


export default class NotePage extends React.Component {
  componentWillMount() {
    this.fetchData();    
  }

  fetchData() {
    const { noteId, fetchNote } = this.props;
    fetchNote(noteId).then(() => console.log('done'));
  }

  render() {
    const { noteId, name, value, tags, saving, fetching, deleting,
      changeName, changeValue, changeTags, saveNoteToServer, deleteThisNote } = this.props;

    console.log(this.props);

    const note = (
      <div>
        <h1>{name}</h1>
        <NameInput name={name} changeName={changeName}></NameInput>
        <NoteTextInput value={value} changeValue={changeValue}></NoteTextInput>
        <TagsInput tags={tags} changeTags={changeTags}></TagsInput>
        <button onClick={() => saveNoteToServer(noteId)}>{(saving)? 'saving...' : 'Save note'}</button>
        <button onClick={() => deleteThisNote(noteId)}>{(deleting)? 'deleting...' : 'Delete note'}</button>
      </div>
    );

    return (
      <div>
        <Link to={'/notes'}>Back to list</Link>
        {fetching? <h3>...Fetching...</h3> : note}
      </div>
    );    
  }
}

// TODO Proptypes