import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";
import {Button,TextField } from "@mui/material"

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    this.props.createPost(post);
  }
  render() {
    return (
      <div>
        <h2>Add your post</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <TextField id="outlined-basic" label="Post Title" variant="outlined" type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
              style={{ width: '200px'}} 
              required />
          </div>
          <div>
            <TextField id="outlined-basic" label="Post Body" variant="outlined" type="text"
              name="body"
              onChange={this.onChange}
              value={this.state.body}
              style={{marginTop: "10px", width: '500px'}} 
              multiline
              required/>
          </div>
          <p>Should return 201 status if success</p>
          <Button type="submit" variant="outlined" >Add Post</Button>
          
        </form>
      </div>
    );
  }
}

export default connect(null, { createPost })(Postform);
