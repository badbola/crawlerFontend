import { APIurls } from '../helper/url';
import { UPDATE_USERS } from './actionTypes';

export function fetchUsers() {
  return (dispatch) => {
    const url = APIurls.fetchUsers();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.Users);
        dispatch(updateUser(data.Users));
      });
  };
}

export function updateUser(users) {
  return {
    type: UPDATE_USERS,
    users,
  };
}
