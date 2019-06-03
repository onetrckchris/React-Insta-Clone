import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className="container">
            {props.instaPosts.map(instaPost => (
                <Post key={instaPost.id} instaPost={instaPost} />
            ))}
        </div>
    )
}

PostContainer.propType = {
    instaPosts: PropTypes.array.isRequired
}

export default PostContainer;