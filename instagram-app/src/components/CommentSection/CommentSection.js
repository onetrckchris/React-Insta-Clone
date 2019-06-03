import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

const CommentSection = props => {
    return (
        <div>
            {props.instaPostComments.map(instaPostComment => (
                <Comment key={instaPostComment.id} comment={instaPostComment} />
            ))}
        </div>
    )
}

CommentSection.propTypes = {
    instaPostComments: PropTypes.array.isRequired
}

export default CommentSection;