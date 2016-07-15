import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as NoteActions from '../actions/NoteActions';
import NotePage from '../components/NotePage';

class NoteView extends React.Component {

  render() {
    return (
      <div>
        <NotePage {...this.props}></NotePage>
      </div>
      );
  }
}

const mapStateToProps = (state, { params }) => {
  const noteId = params.noteId || '';
  return {
    ...state.note,
    noteId
  }
};

// const mapDispatchToProps = (dispatch) => {
// }

NoteView = withRouter(connect(mapStateToProps, NoteActions)(NoteView));

export default NoteView;

