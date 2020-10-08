import React, { Component } from 'react';
import { UserList } from './index';
class User extends Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        <div>
          <UserList users={users} />
        </div>
      </div>
    );
  }
}

export default User;
