import React from 'react';

import { connect } from 'react-redux';
import {
  Login,
  SignUp,
  Blog,
  Navbar,
  Search,
  History /* Home */,
} from './index';
import { BrowserRouter as Router, /*Link*/ Route } from 'react-router-dom';
import { fetchUsers } from '../actions/users';
import jwt_decode from 'jwt-decode';
import { authenticateUser } from '../actions/auth';
// import Navbar from './Navbar';
// import Search from './Search';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwt_decode(token);
      console.log('user', user);
      this.props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user.id,
        })
      );
    }
  }

  render() {
    const { isLoggedin } = this.props.auth;
    return (
      <Router>
        {isLoggedin ? <Navbar /> : <div></div>}

        <Search />
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/blog" component={Blog} />
        <Route path="/history" component={History} />
      </Router>
    );
  }
}

function mapStatetoProps(state) {
  return {
    users: state.users,
    auth: state.auth,
  };
}

export default connect(mapStatetoProps)(App);
