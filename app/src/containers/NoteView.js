import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import noteActions from '../actions/NoteActions';
import NotePage from '../components/NotePage';

class NoteView extends React.Component {

  render() {
    <NotePage {...this.props}></NotePage>
  }
}

const mapStateToProps = (state, { params }) => {
  const noteId = params.noteId || '';
  return {
    ...state,
    noteId
  }
};

// const mapDispatchToProps = (dispatch) => {
// }

NoteView = withRouter(connect(mapStateToProps, noteActions)(NoteView));

export default NoteView;

