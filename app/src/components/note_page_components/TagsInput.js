import React from 'react';

const TagsInput = ({ tags, changeTags }) => (
  <div>
    <input type="text" value={tags} 
        onChange={(e) => changeTags(e.target.value)}/>
  </div>
);



export default TagsInput;