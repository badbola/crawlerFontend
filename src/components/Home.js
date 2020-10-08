import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="details" id="Banner">
          Welcome To Crawler
        </div>
        <div className="details" id="info">
          Currently we are crawling on medium.com
        </div>
        <div className="details" id="step">
          To Proceed further
        </div>
        <div className="buttonsMain">
          <span className="details buttonToggle">
            <Link to="/login">Login</Link>
          </span>
          <span className="details buttonToggle">
            <Link to="/signup">Signup</Link>
          </span>
        </div>
      </div>
    );
  }
}

export default Home;
