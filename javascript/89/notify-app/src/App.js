import React, { Component } from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom'

import './App.css';
import NoteForm from './NoteForm';
import NoteDisplay from './NoteDisplay';

export default class App extends Component {

  state = {
    title: '',
    message: '',
    notes: [],
    selectedNote: ''
  }


  handleSubmittedNote = (title, message) => {
    this.setState({
      title: title,
      message: message,
      notes: [...this.state.notes, { id: this.state.notes.length + 1, title: this.state.title, message: this.state.message }]
    });
  }

  handleNoteClick = note => {
    this.setState({

      selectedNote: note
    });
  }





  render() {
    console.log('inApp')
    return (

      <BrowserRouter>
        <div className="App">
          <div className='container'>
            <Route path="/" component={App} />
            <Route path="/noteForm" component={NoteForm} />
            <NoteForm onSubmit={this.handleSubmittedNote} />
            <NoteDisplay title={this.state.title} message={this.state.message} notes={this.state.notes} onHandleNoteClick={this.handleNoteClick} selectedNote={this.state.selectedNote} />
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

