import React from 'react';

const TagsInput = ({ tags, changeTags }) => 
  <input type="text" value={tags} 
          onChange={(e) => changeTags(e.target.value)}/>


export default TagsInput;