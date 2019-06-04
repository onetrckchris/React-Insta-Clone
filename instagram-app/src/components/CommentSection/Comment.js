import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div>
            <p><strong>{props.comment.username}</strong> {props.comment.text}</p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id:       PropTypes.string.isRequired,
        text:     PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    })
}

export default Comment;