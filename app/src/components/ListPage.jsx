import React from 'react';
// import { browserHistory } from 'react-router';
import ListNoteItem from './list_page_components/ListNoteItem.jsx';
import LoadMoreButton from './list_page_components/LoadMoreButton.jsx';
import Loader from './Loader.jsx';

class ListPage extends React.Component {

  componentWillMount() {
    // this.findNotes('');
  }

  componentDidMount() {
    document.title = 'Notepad Online - Search';
  }

  handleInputChange = (e) => {
    if (e.key === 'Enter') {
      this.findNotes(this.searchInput.value);
    }
  };

  deleteNote = (noteId) => {
    const { deleteNote } = this.props;
    deleteNote(noteId); /* .then(() => this.findNotes(this.searchInput.value)) */
  };

  findNotes = (queryString) => {
    const { findNotesByTags } = this.props;
    findNotesByTags(queryString);
  };

  render() {
    const { searching, creating, loadingMoreNotes, foundNotes, addNewNote } = this.props;

    const notesToShow = foundNotes.map((note, index) => (
      <ListNoteItem note={note} deleteNote={this.deleteNote} key={index} />
    ));

    let loaderText = '';
    if (searching) {
      loaderText = 'searching';
    } else if (creating) {
      loaderText = 'creating';
    }

    const loader = <Loader text={loaderText} />;

    return (
      <div className="list-page">

        <div className="search-add-panel">
          <input
            className="search-add-panel-input"
            type="text"
            ref={(ref) => { this.searchInput = ref; }}
            placeholder="write, tags, here"
            onKeyPress={this.handleInputChange}
          />
          <button className="save" onClick={() => this.findNotes(this.searchInput.value)}>
            <i className="fa fa-search fa-lg" />
            &nbsp;Find notes
          </button>
          <button className="add" onClick={() => addNewNote()}>
            <i className="fa fa-pencil-square-o fa-lg" />
            &nbsp;Add new note
          </button>
        </div>

        { (searching || creating) ?
            loader :
            <div className="list-page-notes">
              {notesToShow}
            </div>
        }

        {
          (notesToShow.length === 0 || searching || creating) ?
            null :
            <LoadMoreButton
              loadMoreNotes={this.props.loadMoreNotes}
              loadingMoreNotes={loadingMoreNotes}
            />
        }

      </div>
    );
  }
}

ListPage.propTypes = {
  searching: React.PropTypes.bool.isRequired,
  creating: React.PropTypes.bool.isRequired,
  loadingMoreNotes: React.PropTypes.bool.isRequired,
  foundNotes: React.PropTypes.array.isRequired,
  addNewNote: React.PropTypes.func.isRequired,
  deleteNote: React.PropTypes.func.isRequired,
  findNotesByTags: React.PropTypes.func.isRequired,
  loadMoreNotes: React.PropTypes.func.isRequired,
};

export default ListPage;
