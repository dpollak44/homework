import React, { Component } from 'react';

export default class Posts extends Component {

    // state = {

    // }

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts() {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.blogger.id}`)
            .then(response => {
                return response.json();
            })
            .then(posts => {
                this.setState({
                    posts: posts
                });
                setTimeout(() => {
                    console.log(posts)
                }, 1000);
                // console.log(posts)
            })
            .catch(err => {
                console.error(err);
                this.setState({
                    error: err.message ? err.message : 'Failed to load'
                });
            });
    }


    render() {


        return (
            <></>
        )

        // <h2 style={{ textAlign: 'center' }}> {this.props.blogger.id} </h2>
        // );
        // }
    }
}
