import React from 'react';

class CommentForm extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    handleChange = event => {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <form onSubmit={this.props.addComment}>
                <input 
                    className="add-comment-input" 
                    type='text' 
                    name='title' 
                    placeholder="Add a comment..." 
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </form>
        )
    }
}

export default CommentForm;