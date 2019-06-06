import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CommentSection from '../CommentSection/CommentSection';

const PostContainer = styled.div`
    width: 614px;
    margin: auto;
`;

const HeaderInfo = styled.div`
    display: flex;
    border: 1px solid #E6E6E6;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: none;
    padding: 15px 0px;
    background-color: white;
    align-items: center;
`;

const Poster = styled.h6`
    margin: 0px;
    font-weight: 600;
`;

const BottomSection = styled.div`
    padding: 15px;
    padding-bottom: 0px;
    border: 1px solid #E6E6E6;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    margin-top: -5px;
    margin-bottom: 25px;
    background-color: white;

    & p {
        margin: 10px 0px;
        font-size: 0.9rem;
    }

    & i {
        margin-right: 10px;
        cursor: pointer;
    }
`;

const Likes = styled.h4`
    margin: 0px;
    margin-top: 10px;
    font-size: 0.9rem;
`;

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
            <PostContainer>
                <HeaderInfo>
                    <img className="thumbnail" src={this.props.instaPost.thumbnailUrl} alt="#" />
                    <Poster>{this.props.instaPost.username}</Poster>
                    <div className="delete-button" onClick={this.props.deletePost.bind(this, this.props.instaPost.id)}>X</div>
                </HeaderInfo>
                <img className="main-img" src={this.props.instaPost.imageUrl} alt="#" />
                <BottomSection>
                    <i className="far fa-heart fa-lg"
                        src="./imgs/bold-hearth.png" 
                        alt="#"
                        onClick={this.likePost}></i>
                    <i className="far fa-comment fa-lg"></i>
                    <Likes className="likes">{this.state.likes} likes</Likes>
                    <CommentSection instaPostComments={this.props.instaPost.comments} />
                </BottomSection>
            </PostContainer>
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