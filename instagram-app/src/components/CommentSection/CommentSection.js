import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.instaPostComments
        }
    }

    addComment = (value) => {
        const newComment = {
            id: uuid.v4(),
            username: localStorage.getItem('login-username'),
            text: value
        }
        
        this.setState({ comments: [...this.state.comments, newComment] })
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => (
                    <Comment 
                        key={comment.id} 
                        comment={comment}
                    />
                ))}
                <CommentForm addComment={this.addComment} />
            </div>
        )
    }
}

CommentSection.propTypes = {
    instaPostComments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;