import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return <div>{postItems}</div>;
  }
}

const mapStatetoProps = (state) => ({
  posts: state.posts.items,
});

export default connect(mapStatetoProps, { fetchPosts })(Posts);