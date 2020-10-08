import { UPDATE_USERS } from '../actions/actionTypes';

export default function post(state = [], action) {
  switch (action.type) {
    case UPDATE_USERS:
      return action.users;
    default:
      return state;
  }
}
