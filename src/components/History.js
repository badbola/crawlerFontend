import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHistory } from '../actions/history';
class History extends Component {
  componentDidMount() {
    this.props.dispatch(fetchHistory());
  }
  render() {
    const { history, isHistory } = this.props.history;
    console.log(this.props.history);
    return (
      <div className="list">
        {isHistory ? (
          history.map((item) => (
            <div key={item._id} className="itemContainer">
              <span>Searched:{item.content}</span>
              <span>At:{item.updatedAt}</span>
            </div>
          ))
        ) : (
          <div>Fetching</div>
        )}
      </div>
    );
  }
}
function mapStatetoProps(state) {
  return {
    history: state.history,
  };
}

export default connect(mapStatetoProps)(History);
