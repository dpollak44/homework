import React, { Component } from 'react';

import './App.css';
import NoteForm from './NoteForm';

export default class App extends Component {

  state = {
    tite: '',
    note: ''
  }


  handleSubmittedNote = (title, note) => {
    this.setState({
      title: title,
      note: note
    });
  }

  render() {
    console.log(this.state.title)
    console.log(this.state.note)
    return (
      <div className="App">
        <div className='container'>
          <NoteForm onSubmit={this.handleSubmittedNote} />
        </div>

      </div>
    );
  }
}

