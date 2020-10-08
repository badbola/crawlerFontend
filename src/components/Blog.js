import React, { Component } from 'react';
import { fetchblog } from '../actions/blog';
import { connect } from 'react-redux';
import { BlogContent } from './index';
class Blog extends Component {
  componentDidMount() {
    if (
      (localStorage.getItem('link') !== null) &
      (localStorage.getItem('link') !== undefined)
    ) {
      this.props.dispatch(fetchblog(localStorage.getItem('link')));
    }
  }

  render() {
    const { isFetched } = this.props.blog;
    console.log('props' + this.props.blog);
    return (
      <div className="list">
        {isFetched ? (
          <BlogContent content={this.props.blog.resp} />
        ) : (
          <div>Fetching...</div>
        )}
      </div>
    );
  }
}
function mapStatetoProps(state) {
  return {
    blog: state.blog,
    auth: state.auth,
  };
}

export default connect(mapStatetoProps)(Blog);
