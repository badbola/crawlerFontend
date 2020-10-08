import { APIurls } from '../helper/url';
import { SEARCH_SUCCESS } from './actionTypes';
import { searchFail, searchStart } from './auth';
export function search(query) {
  return (dispatch) => {
    dispatch(searchStart());
    const url = APIurls.search(query);
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(searchSuccess(data.list));
          console.log('datalist', data.list);
          return;
        }
        dispatch(searchFail(data.message));
      });
  };
}

// Search

export function searchSuccess(list) {
  return {
    type: SEARCH_SUCCESS,
    list,
  };
}
