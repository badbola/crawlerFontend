import React, { Component } from 'react';
import { clearAllAuth, login } from '../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  componentWillUnmount() {
    this.props.dispatch(clearAllAuth());
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log('this.state', this.state);
    const { email, password } = this.state;

    if (email && password) {
      this.props.dispatch(login(email, password));
    }
  };
  render() {
    const { error, isProgress, isLoggedin } = this.props.auth;
    if (isLoggedin) {
      return <Redirect to="/" />;
    }
    return (
      <div className="forms">
        <form className="formAlign">
          <span className="formAlign">Login</span>
          {error && <div>{error}</div>}
          <div>
            <input
              className="formAlign"
              type="email"
              placeholder="Email"
              required
              onChange={this.handleEmailChange}
              value={this.state.email}
            />
            <input
              className="formAlign"
              type="password"
              placeholder="Password"
              required
              onChange={this.handlePasswordChange}
              value={this.state.password}
            />
          </div>
          {isProgress ? (
            <button
              className="formAlign subButton"
              onClick={this.onSubmit}
              disabled={isProgress}
            >
              Please wait
            </button>
          ) : (
            <button className="formAlign subButton" onClick={this.onSubmit}>
              Log in
            </button>
          )}
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Login);
