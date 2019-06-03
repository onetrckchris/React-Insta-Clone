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
    comment: PropTypes.object.isRequired
}

export default Comment;