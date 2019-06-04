import React from 'react';

class CommentForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newComment: ''
        }
    }

    handleChange = event => {
        this.setState({ newComment: event.target.value })
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.addComment(this.state.newComment);
        this.setState({ newComment: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    className="add-comment-input" 
                    type='text' 
                    name='title' 
                    placeholder="Add a comment..." 
                    value={this.state.newComment}
                    onChange={this.handleChange}
                />
            </form>
        )
    }
}

export default CommentForm;