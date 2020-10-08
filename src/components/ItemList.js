import React, { Component } from 'react';
// import { clearAllAuth } from '../actions/auth';
import { connect } from 'react-redux';
class ItemList extends Component {
  handleNewPost = (link) => (e) => {
    e.preventDefault();
    console.log(link);
  };
  render() {
    const { lists } = this.props;

    return (
      <div>
        {lists.map((item) => (
          <div key={item.link}>
            <span>Title: {item.title}</span>
            <span>Claps: {item.claps}</span>
            <span>Responses: {item.responses}</span>
            <span>Author: {item.author}</span>
            <span>Date : {item.date}</span>
            <span>
              <a
                target="blank"
                onClick={this.handleNewPost(item.link)}
                href={item.link}
              >
                Read More
              </a>
            </span>
          </div>
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(ItemList);
