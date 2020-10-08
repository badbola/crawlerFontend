import { FETCH_BLOG } from './actionTypes';

export function fetchblog(link) {
  return (dispatch) => {
    const url = link;
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then((response) => {
        // console.log('resp', response.clone().json());
        return response.json();
      })
      .then((data) => {
        console.log('fetch' + data);
        console.log(data.content);
        dispatch(updateBlog(data.content));
      });
  };
}

export function updateBlog(resp) {
  return {
    type: FETCH_BLOG,
    resp,
  };
}
