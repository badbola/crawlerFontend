import React, { Component } from 'react';
import { fetchTag } from '../actions/tag';
import { connect } from 'react-redux';
import TagData from './TagData';

class BlogContent extends Component {
  handleTag = (tag) => (e) => {
    this.props.dispatch(fetchTag(tag));
  };
  render() {
    const { content } = this.props;
    const { isTagFetched } = this.props.tag;
    return (
      <div>
        {isTagFetched ? (
          <TagData data={this.props.tag.tags} />
        ) : (
          content.map((item) => (
            <div key={item.title} className="itemContainer blogContainer">
              <span className="blogTitle">Title:{item.title}</span>
              <span className="blogContent">Blog:{item.blog}</span>
              <span className="author">Author:{item.author}</span>
              {item.tags.map((tag) => (
                <div key={tag}>
                  <span>
                    <button
                      className="subButton blogButton"
                      onClick={this.handleTag(tag)}
                    >
                      {tag}
                    </button>
                  </span>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    tag: state.tag,
    auth: state.auth,
  };
}

export default connect(mapStatetoProps)(BlogContent);
