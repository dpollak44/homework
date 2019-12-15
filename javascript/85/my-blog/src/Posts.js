import React, { Component } from 'react';

export default class Posts extends Component {

    state = {
        posts: []
    }

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

                console.log(posts)

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
            <>
                {this.state.posts && this.state.posts.map(post => <div>{post.body}</div>)}
            </>
        )

        // <h2 style={{ textAlign: 'center' }}> {this.props.blogger.id} </h2>
        // );
        // }
    }
}
