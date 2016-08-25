import React from 'react';

const TagsInput = ({ tags, changeTags }) => (
  <input className="note-page-input" type="text"
    placeholder="enter, tags, here" 
    value={tags} 
    onChange={(e) => changeTags(e.target.value)}/>
);



export default TagsInput;