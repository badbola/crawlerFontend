import React, { Component } from 'react';
import { clearAllAuth, signup } from '../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
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

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
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
    const { email, password, name } = this.state;

    if (email && password && name) {
      this.props.dispatch(signup(email, password, name));
    }
  };
  render() {
    const { error, isProgress, isLoggedin } = this.props.auth;
    if (isLoggedin) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <form className="formAlign">
          <span className="formAlign">Sign Up</span>
          {error && <div>{error}</div>}
          <div>
            <input
              className="formAlign"
              type="name"
              placeholder="Name"
              required
              onChange={this.handleNameChange}
              value={this.state.name}
            />
            <input
              className="formAlign"
              type="email"
              placeholder="Email"
              required
              onChange={this.handleEmailChange}
              value={this.state.email}
            />
            <input
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
              SignUp
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

export default connect(mapStateToProps)(SignUp);
