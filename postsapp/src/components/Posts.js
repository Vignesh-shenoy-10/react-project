import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import Box from '@mui/material/Box';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
       <strong> <p sx={{}}>{post.title}</p></strong>
       <center>
        <Box
        sx={{
          width:500,
          height:100,
          backgroundColor: 'primary.light',
          color: 'white',
          borderRadius: 1
        }}
        >
        <p>{post.body}</p>
          </Box>
          </center>
       
      </div>
    ));
    return (
    <div>
      <h2>Dashboard Feed</h2>
      <p>Random Feed fetched from "jsonplaceholder.typicode.com/posts"</p>
      {postItems}
      </div>)
  }
}

const mapStatetoProps = (state) => ({
  posts: state.posts.items,
});

export default connect(mapStatetoProps, { fetchPosts })(Posts);
