import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import  PropTypes from 'prop-types';

class Posts extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }
   render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
    ));
    return <div>{ postItems }</div>;
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts);
