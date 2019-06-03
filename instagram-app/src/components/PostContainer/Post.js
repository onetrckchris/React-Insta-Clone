import React from 'react';
import PropTypes from 'prop-types';

import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return (
        <div>
            <div className="header-info">
                <img className="thumbnail" src={props.instaPost.thumbnailUrl} alt="#" />
                <h4>{props.instaPost.username}</h4>
            </div>
            <img className="main-img" src={props.instaPost.imageUrl} alt="#" />
            <div className="bottom-section">
                <h4 className="likes">{props.instaPost.likes} likes</h4>
                <CommentSection instaPostComments={props.instaPost.comments} />
            </div>
        </div>
    )
}

Post.propTypes = {
    instaPost: PropTypes.object.isRequired
}

export default Post;