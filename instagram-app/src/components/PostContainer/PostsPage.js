import React from 'react';
import dummyData from '../../dummy-data';

import PostContainer from './PostContainer';
import NavBar from '../NavBar/NavBar';

class PostsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: [],
            filteredPosts: []
        }
    }

    componentDidMount() {
        this.setState({ posts: dummyData })
    }

    search = event => {
        if(event.target.value !== '') {
            this.setState({
                filteredPosts: this.state.posts.filter(post => 
                post.username.includes(event.target.value
                ))
            }) 
        } else {
            this.setState({ filteredPosts: this.state.posts })
        }
    }

    deletePost = (id) => {
    this.setState({ posts: [...this.state.posts.filter(post => post.id !== id)] })
    }

    logout = () => {
        localStorage.removeItem('login-username');
        localStorage.removeItem('login-password');
    }

    render() {
        return (
            <div>
                <NavBar search={this.search} logout={this.logout} />
                <PostContainer 
                    instaPosts={this.state.filteredPosts.length !== 0 ? this.state.filteredPosts : this.state.posts} 
                    likePost={this.likePost}
                    deletePost={this.deletePost}
                />
            </div>
        )
    }
}

export default PostsPage;