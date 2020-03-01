import React, { Component } from 'react';


export default class Comment extends Component {

    render() {

        const { comment, author, date } = this.props;



        return (
            <div>
                <h3>{comment}</h3>
                <h4>by {author} on {date}</h4>
            </div>
        );
    }
}