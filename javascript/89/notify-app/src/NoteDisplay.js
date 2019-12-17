import React, { Component } from 'react';

export default class extends Component {



    render() {


        return (
            <div>
                <div>{this.props.title}</div>
                <div>{this.props.note}</div>
            </div>
        );
    }
}
