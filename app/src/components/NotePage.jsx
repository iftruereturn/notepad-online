import React from 'react';
import { browserHistory } from 'react-router';
import NameInput from './note_page_components/NameInput.jsx';
import NoteTextarea from './note_page_components/NoteTextarea.jsx';
import TagsInput from './note_page_components/TagsInput.jsx';
import IsSecretCheckbox from './note_page_components/IsSecretCheckbox.jsx';
import Loader from './Loader.jsx';

class NotePage extends React.Component {

  componentWillMount() {
    this.fetchData();
  }

  componentDidMount() {
    const { noteId } = this.props;
    document.title = `Notepad Online - ${noteId}`;
  }

  fetchData() {
    const { noteId, fetchNote } = this.props;
    fetchNote(noteId);
  }

  render() {
    const { noteId, name, value, createdAt, updatedAt, tags, owner, isSecret,
      saving, fetching, deleting,
      changeName, changeValue, changeTags, changeIsSecret,
      saveNoteToServer, deleteThisNote } = this.props;

    const note = (
      <div className="note-page">
        <div className="note-page-title">{name}</div>
        <div className="note-page-info">
          <div>Author: {owner}</div>
          <div>Created at: {createdAt}</div>
          <div>Updated at: {updatedAt}</div>
        </div>
        <NameInput name={name} changeName={changeName} />
        <NoteTextarea value={value} changeValue={changeValue} />
        <IsSecretCheckbox isSecret={isSecret} changeIsSecret={changeIsSecret} />
        <TagsInput tags={tags} changeTags={changeTags} />
        <div className="save-delete-buttons">
          <button className="delete" onClick={() => deleteThisNote(noteId)}>
            {deleting ?
              <span>
                <i className="fa fa-refresh fa-spin fa-lg" />
                &nbsp;deleting...
              </span> :
              <span>
                <i className="fa fa-trash-o fa-lg" />
                &nbsp;Delete note
              </span>
            }
          </button>
          <button className="save" onClick={() => saveNoteToServer(noteId)}>
            {saving ?
              <span>
                <i className="fa fa-refresh fa-spin fa-lg" />
                &nbsp;saving...
              </span> :
              <span>
                <i className="fa fa-floppy-o fa-lg" />
                &nbsp;Save note
              </span>
            }
          </button>
        </div>
      </div>
    );

    return (
      <div>
        <button className="save" onClick={() => browserHistory.push('/notes')}>
          <i className="fa fa-long-arrow-left fa-lg" />
          &nbsp;Return to list
        </button>
        {fetching ? <Loader text="fetching" /> : note}
      </div>
    );
  }
}

NotePage.propTypes = {
  noteId: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  createdAt: React.PropTypes.string.isRequired,
  updatedAt: React.PropTypes.string.isRequired,
  tags: React.PropTypes.string.isRequired,
  owner: React.PropTypes.string.isRequired,
  isSecret: React.PropTypes.bool.isRequired,
  saving: React.PropTypes.bool.isRequired,
  fetching: React.PropTypes.bool.isRequired,
  deleting: React.PropTypes.bool.isRequired,
  changeName: React.PropTypes.func.isRequired,
  changeValue: React.PropTypes.func.isRequired,
  changeTags: React.PropTypes.func.isRequired,
  changeIsSecret: React.PropTypes.func.isRequired,
  fetchNote: React.PropTypes.func.isRequired,
  saveNoteToServer: React.PropTypes.func.isRequired,
  deleteThisNote: React.PropTypes.func.isRequired,
};

export default NotePage;
