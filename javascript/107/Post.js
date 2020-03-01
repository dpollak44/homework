import React, { Component } from 'react';
import './Post.css';
import AddComment from './AddComment';

export default class Post extends Component {
    state = {};

    async componentDidMount() {
        try {
            const resp = await fetch('http://localhost/comments');
            if (!resp.ok) {
                return console.error(resp.statusText)
            }
            const comments = await resp.json();
            this.setState({
                comments
            });
        } catch (e) {
            console.error(e);
        }
    }


    render() {

        const comments = this.state.comments.map(c => <Comment key={c._id} comment={c} />);




        const { post } = this.props;

        const addCommentButton = this.state.addingComment ?
            null :
            <button className="addComment" onClick={this.addComment}>add comment</button>;

        const addComment = this.state.addingComment ?
            <AddComment onComplete={this.commentComplete} id={post._id} /> :
            null;

        return (
            <div className="post" id={post._id}>
                <h2>{post.title}</h2>
                <h3>by {post.author} on {new Date(post.date).toLocaleString()}</h3>
                <div>{post.content}</div>



                <div className="comments">
                    {comments}
                    {addCommentButton}
                    {addComment}
                </div>
            </div>
        );
    }

    addComment = () => {
        this.setState({
            addingComment: !this.state.addingComment
        });
    }

    commentComplete = () => {
        this.setState({
            addingComment: false
        });
    }


}




