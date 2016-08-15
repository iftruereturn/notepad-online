import React from 'react';
import ListNoteItem from './list_page_components/ListNoteItem';

export default class ListPage extends React.Component {
  componentWillMount() {
    this.findNotes('');
  }

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
    const { searching, foundNotes, addNewNote } = this.props;

    let notesToShow = foundNotes.map((note, index) => {
      return <ListNoteItem note={note} deleteNote={this.deleteNote} key={index}></ListNoteItem>
    });

    return (
      <div>

        <div>
          <input type="text" ref={(ref) => this.searchInput = ref}/>
          <button className="save" onClick={() => this.findNotes(this.searchInput.value)}>Find notes</button>
          <button className="add" onClick={() => addNewNote()}>+ Add new note</button>
        </div>
          
        { searching ? <h2>...Searching...</h2>
                    : <div className="list-page-notes">
                        {notesToShow}
                      </div>
                      
        }
          
      </div> 
    );
  }
}

// TODO Proptypes
