import React from 'react';

const TagsInput = ({ tags, changeTags }) => (
  <input
    className="note-page-input"
    type="text"
    placeholder="enter, tags, here"
    value={tags}
    onChange={(e) => changeTags(e.target.value)}
  />
);

TagsInput.propTypes = {
  tags: React.PropTypes.string.isRequired,
  changeTags: React.PropTypes.func.isRequired,
};

export default TagsInput;
