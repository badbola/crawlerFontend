import React, { Component } from 'react';
import { clearAllAuth, searchAgain } from '../actions/auth';
import { search } from '../actions/search';
import { connect } from 'react-redux';
import { ItemList } from './index';
import Home from './Home';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  componentWillUnmount() {
    this.props.dispatch(clearAllAuth());
  }
  handleQueryChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;

    if (query) {
      this.props.dispatch(search(query));

      // this.forceUpdate();
    }
  };
  resetInput = () => {
    this.props.dispatch(searchAgain());
  };
  render() {
    const { error, isProgress, isLoggedin } = this.props.auth;
    const { inProgress /*isLoggedin*/ } = this.props.search;
    return (
      <div>
        {isLoggedin ? (
          <form className="formAlign">
            <span className="formAlign">Search in medium</span>
            {error && <div>{error}</div>}
            <div>
              <input
                className="formAlign"
                type="query"
                name="query"
                required
                onFocus={this.resetInput}
                onChange={this.handleQueryChange}
                value={this.state.query}
              />
            </div>
            <div>
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
                  Search
                </button>
              )}
            </div>
            {inProgress ? (
              <div>Please Wait</div>
            ) : (
              <ItemList lists={this.props.search.list} />
            )}
          </form>
        ) : (
          <Home />
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
    search: state.search,
  };
}

export default connect(mapStateToProps)(Search);
