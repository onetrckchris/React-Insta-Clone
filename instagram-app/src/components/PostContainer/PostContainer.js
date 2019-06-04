import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className="container">
            {props.instaPosts.map(instaPost => (
                <Post 
                    key={instaPost.id} 
                    instaPost={instaPost} 
                    addComment={props.addComment}
                />
            ))}
        </div>
    )
}

PostContainer.propType = {
    instaPosts: PropTypes.arrayOf(PropTypes.object)
}

export default PostContainer;