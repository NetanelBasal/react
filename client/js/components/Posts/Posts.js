import React from 'react';
import Post from './Post/Post';
import $ from 'jquery';

var Posts = React.createClass({

  getInitialState() {
    return { posts: [] };
  },

  componentWillMount() {
    this.getPosts();
  },

  getPosts() {
    $.ajax({
      url: "https://json-monster.herokuapp.com/data/14/test/posts"
    }).then(( res ) => {
      this.setState({
        posts: res
      });
    });
  },

  render() {
    var postNodes = this.state.posts.map(function( post ) {
      return (
        <Post title={post.title} body={post.body} />
      );
    });

    return (
      <div id="posts-container">
        <h1>Posts page</h1>
          {postNodes}
      </div>
    );
  }
});

export default Posts;
