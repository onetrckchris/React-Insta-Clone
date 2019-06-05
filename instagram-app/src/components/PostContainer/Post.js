import React from 'react';
import PropTypes from 'prop-types';

import CommentSection from '../CommentSection/CommentSection';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.instaPost.likes
        }
    }

    likePost = () => {
        this.setState(prevState => {
            return {likes: prevState.likes + 1}
        })
    }

    render() {
        return (
            <div>
                <div className="header-info">
                    <img className="thumbnail" src={this.props.instaPost.thumbnailUrl} alt="#" />
                    <h4>{this.props.instaPost.username}</h4>
                </div>
                <img className="main-img" src={this.props.instaPost.imageUrl} alt="#" />
                <div className="bottom-section">
                    <img 
                        className="post-actions" 
                        src="./imgs/bold-hearth.png" 
                        alt="#"
                        onClick={this.likePost}
                    />
                    <img className="post-actions" src="./imgs/message.png" alt="#" />
                    <h4 className="likes">{this.state.likes} likes</h4>
                    <CommentSection instaPostComments={this.props.instaPost.comments} />
                </div>
            </div>
        )
    }
}

Post.propTypes = {
    instaPost: PropTypes.shape({
        comments:     PropTypes.arrayOf(PropTypes.object),
        id:           PropTypes.string.isRequired,
        imageUrl:     PropTypes.string.isRequired,
        likes:        PropTypes.number.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        timestamp:    PropTypes.string.isRequired,
        username:     PropTypes.string.isRequired
    })
}

export default Post;