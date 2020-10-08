import React, { Component } from 'react';

class Blog extends Component {
  componentDidMount() {}

  render() {
    console.log('props' + this.props);
    return <div>Hwllo</div>;
  }
}

export default Blog;
