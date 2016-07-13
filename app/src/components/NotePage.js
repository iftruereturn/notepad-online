import React from 'react';

export default class NotePage extends React.Component {
  render() {
    let { name, value, tags  } = this.props;

    return (
      <div>
        <h1>{name}</h1>
        <input type="text"/>
        <textfield>{value}</textfield>
        <input type="text"/>
        <button>Save note</button>
      </div>
    );    
  }
}