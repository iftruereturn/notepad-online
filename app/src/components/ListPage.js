import React from 'react';
import ListNoteItem from './list_page_components/ListNoteItem';
import SearchField from './list_page_components/SearchField';

export default class ListPage extends React.Component {
  componentWillMount() {
    this.findNotes('');
  }

  deleteNote = (noteId) => {
    const { deleteNote } = this.props;
    deleteNote(noteId).then( () => this.findNotes(this.searchInput.value || '') );
  };

  findNotes = (queryString) => {
    const { findNotesByTags } = this.props;
    findNotesByTags(queryString).then(() => console.log('done'));
  };

  render() {
    const { searching, foundNotes, addNewNote } = this.props;

    let notesToShow = foundNotes.map((note, index) => {
      return <ListNoteItem note={note} deleteNote={this.deleteNote} key={index}></ListNoteItem>
    });

    return (
      <div>
        <SearchField searchInput={this.searchInput} findNotes={this.findNotes}
          addNewNote={addNewNote}></SearchField>
          
            { searching ? <h2>Searching</h2>
                        : <div className="list-page">
                            {notesToShow}
                          </div>
                          
            }
          
      </div> 
    );
  }
}

// TODO Proptypes
