import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentSection = props => {
    return (
        <div>
            {props.instaPostComments.map(instaPostComment => (
                <Comment 
                    key={instaPostComment.id} 
                    comment={instaPostComment}
                />
            ))}
            <CommentForm />
        </div>
    )
}

CommentSection.propTypes = {
    instaPostComments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;