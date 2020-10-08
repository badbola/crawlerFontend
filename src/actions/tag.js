import { APIurls } from '../helper/url';
import { FETCH_TAG } from './actionTypes';

export function fetchTag(tag) {
  return (dispatch) => {
    const url = APIurls.fetchTag(tag);
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('tag' + data.resp);
        dispatch(updateTag(data.resp));
      });
  };
}
export function updateTag(tags) {
  return {
    type: FETCH_TAG,
    tags,
  };
}
