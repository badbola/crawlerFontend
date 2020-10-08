import React, { Component } from 'react';

class TagData extends Component {
  handleNewPost = (link) => (e) => {
    e.preventDefault();
    localStorage.setItem('link', link);
    window.open('/blog', '_blank');
    console.log(link);
  };
  render() {
    console.log('tags' + this.props);
    const { data } = this.props;
    return (
      <div className="list">
        {data.map((item) => (
          <div key={item.link} className="itemContainer">
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

export default TagData;
