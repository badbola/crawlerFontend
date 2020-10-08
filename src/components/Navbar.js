import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/auth';
import { connect } from 'react-redux';

class Navbar extends Component {
  logout = () => {
    localStorage.removeItem('token');
    this.props.dispatch(logoutUser());
  };
  render() {
    return (
      <div className="navBar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li onClick={this.logout}>Logout</li>
        </ul>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    users: state.auth,
  };
}

export default connect(mapStatetoProps)(Navbar);
