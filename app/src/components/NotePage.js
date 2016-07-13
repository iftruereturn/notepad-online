import React from 'react';

export default class NotePage extends React.Component {
  componentDidMount() {
    this.fetchData();    
  }

  fetchData() {
    const { noteId, fetchNote } = this.props;
    fetchNote(noteId).then(() => console.log('done'));
  }

  render() {
    let { name, value, tags  } = this.props;

    console.log(this.props);

    return (
      <div>
        <h1>{name}</h1>
        <input type="text"/>
        <textarea name="" id="" cols="30" rows="10" value={value}></textarea>
        <input type="text"/>
        <button>Save note</button>
      </div>
    );    
  }
}