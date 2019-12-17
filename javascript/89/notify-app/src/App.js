import React, { Component } from 'react';

import './App.css';
import NoteForm from './NoteForm';
import NoteDisplay from './NoteDisplay';

export default class App extends Component {

  state = {
    title: '',
    note: '',
    notes: []
  }


  handleSubmittedNote = (title, note) => {
    this.setState({
      title: title,
      note: note,
      notes: this.state.note
    });
  }

  render() {
    console.log(this.state.title)
    console.log(this.state.note)
    return (
      <div className="App">
        <div className='container'>
          <NoteForm onSubmit={this.handleSubmittedNote} />
          <NoteDisplay title={this.state.title} note={this.state.note} />
        </div>

      </div>
    );
  }
}

