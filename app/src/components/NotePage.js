import React from 'react';
import { Link } from 'react-router';
import NameInput from './note_page_components/NameInput';
import NoteTextarea from './note_page_components/NoteTextarea';
import TagsInput from './note_page_components/TagsInput';
import IsSecretCheckbox from './note_page_components/IsSecretCheckbox';
import { browserHistory } from 'react-router';
import Loader from './Loader';

export default class NotePage extends React.Component {
  
  componentWillMount() {
    this.fetchData();    
  }

  componentDidMount() {
    const { noteId } = this.props;
    document.title = 'Notepad Online - ' + noteId;
  }

  fetchData() {
    const { noteId, fetchNote } = this.props;
    fetchNote(noteId).then(() => console.log('done'));
  }

  render() {
    const { noteId, name, value, createdAt, updatedAt, tags, owner, isSecret,
      saving, fetching, deleting,
      changeName, changeValue, changeTags, changeIsSecret,
      saveNoteToServer, deleteThisNote } = this.props;

    console.log(this.props);

    const note = (
      <div className="note-page">
        <div className="note-page-title">{name}</div>
        <div className="note-page-info">
          <div>Author: {owner}</div>
          <div>Created at: {createdAt}</div>
          <div>Updated at: {updatedAt}</div>
        </div>
        <NameInput name={name} changeName={changeName}></NameInput>
        <NoteTextarea value={value} changeValue={changeValue}></NoteTextarea>
        <IsSecretCheckbox isSecret={isSecret} changeIsSecret={changeIsSecret}></IsSecretCheckbox>
        <TagsInput tags={tags} changeTags={changeTags}></TagsInput>
        <div className="save-delete-buttons">
          <button className="save" onClick={() => saveNoteToServer(noteId)}>
            {(saving)? 'saving...' : 'Save note'}
          </button>
          <button className="delete" onClick={() => deleteThisNote(noteId)}>
            {(deleting)? 'deleting...' : 'Delete note'}
          </button>
        </div>
      </div>
    );

    return (
      <div>
        <button className="save" onClick={() => browserHistory.push('/notes')}>Return to list</button>
        {fetching? <Loader text="fetching" /> : note}
      </div>
    );    
  }
}

// TODO Proptypes