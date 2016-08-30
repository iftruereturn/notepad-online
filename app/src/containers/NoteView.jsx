import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as NoteActions from '../actions/NoteActions';
import NotePage from '../components/NotePage.jsx';

const NoteView = (props) => (
  <NotePage {...props} />
);

const mapStateToProps = (state, { params }) => {
  const noteId = params.noteId || '';
  return {
    ...state.note,
    noteId,
  };
};

// const mapDispatchToProps = (dispatch) => {
// }

export default withRouter(connect(mapStateToProps, NoteActions)(NoteView));
