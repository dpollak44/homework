import React, { Component } from 'react';
import './NoteForm.css'

export default class NoteForm extends Component {

    state = {
        title: '',
        message: ''
    }

    handleTitleChange = e => {
        this.setState({
            title: e.target.value
        });
    }

    handleNoteChange = e => {
        this.setState({
            message: e.target.value
        });
    }



    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.title, this.state.message);
    }





    render() {

        return (
            <div className="jumbotron text-center">
                <h1>New Note</h1>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <input name="title" type="text" className="form-control" value={this.state.title} onChange={this.handleTitleChange} id="formGroupExampleInput" placeholder="Title Here"></input>
                    </div>
                    <div className="form-group">
                        <textarea name="message" className="form-control" value={this.state.message} onChange={this.handleNoteChange} id="exampleFormControlTextarea1" rows="3" placeholder="type your note here..."></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" /*onClick={this.props.onNewNote}*/>Submit</button>
                    </div>
                </form >
            </div>
        );
    }
}