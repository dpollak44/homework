import React, { Component } from 'react';

export default class extends Component {
    state = {


    };

    // handleNoteClick = note => {
    //     this.setState({

    //         selectedNote: note
    //     });
    //     console.log(this.state.selectedNote);
    // }


    render() {
        // const { title, message } = this.props.selectedNote;
        const display = this.props.selectedNote ? <div className='display'>{this.props.selectedNote.message} {this.props.selectedNote.title}</div> : <div></div>
        return (
            <>
                <div className='selection'>{this.props.notes.map(note => <div key={note.id} onClick={() => this.props.onHandleNoteClick(note)}><h4>{note.title}</h4></div>)}</div>
                {display}
            </>
        );
    }
}
