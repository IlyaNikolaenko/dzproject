import React from "react";
import {connect} from "react-redux";
import {getPosts} from "../../actions/posts";

class Posts extends React.Component {
    handleClick = () => {
        this.props.getPosts();
    }

    render() {
        const {isLoading, posts} = this.props;

        return isLoading ? (
            <div>
                <button onClick={this.handleClick}>Load posts</button>
            </div>
        ) : (
            <div>
                {posts.map((item) => (
                    <div key={item.id}>
                        <h4>User: {item.userId}</h4>
                        <h5>{item.title}</h5>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = ({postsReducer: {isLoading, posts}}) => ({isLoading: isLoading, posts: posts});
const mapDispatchToProps = {
    getPosts
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);