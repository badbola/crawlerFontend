import React, { Component } from 'react';

class UsersList extends Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <span>Name:{user.name}</span>
              <br></br>
              <span>Email:{user.email}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UsersList;
