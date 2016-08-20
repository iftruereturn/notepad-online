import React from 'react';
import ListNoteItem from './list_page_components/ListNoteItem';
import Loader from './Loader';

export default class ListPage extends React.Component {
  componentWillMount() {
    this.findNotes('');
  }

  handleInputChange = (e) => {
    if (e.key == 'Enter') {
      this.findNotes(this.searchInput.value);
    }
  };

  deleteNote = (noteId) => {
    const { deleteNote } = this.props;
    console.log(this.searchInput);
    deleteNote(noteId).then( () => this.findNotes(this.searchInput.value) );
  };

  findNotes = (queryString) => {
    const { findNotesByTags } = this.props;
    findNotesByTags(queryString).then(() => console.log('done'));
  };

  render() {
    const { searching, creating, foundNotes, addNewNote } = this.props;

    let notesToShow = foundNotes.map((note, index) => {
      return <ListNoteItem note={note} deleteNote={this.deleteNote} key={index}></ListNoteItem>
    });

    return (
      <div className="list-page">

        <div className="search-add-panel">
          <input 
            className="search-add-panel-input" 
            type="text" 
            ref={(ref) => this.searchInput = ref}
            placeholder="write, tags, here"
            onKeyPress={this.handleInputChange}
          />
          <button className="save" onClick={() => this.findNotes(this.searchInput.value)}>Find notes</button>
          <button className="add" onClick={() => addNewNote()}>+ Add new note</button>
        </div>
          
        { searching ? <Loader text="searching"/> :
          creating ? <Loader text="creating"/>
                    : <div className="list-page-notes">
                        {notesToShow}
                      </div>
                      
        }
          
      </div> 
    );
  }
}

// TODO Proptypes
