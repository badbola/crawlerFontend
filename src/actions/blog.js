import { FETCH_BLOG, START_BLOG, FAIL_BLOG } from './actionTypes';

export function blog(link) {
  return (dispatch) => {
    const url = link;
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
          console('fetch' + data);
          dispatch(updateUser(data.blogs));
        }
        dispatch(failBlog(data.message));
      });
  };
}
export function startBlog() {
  return {
    type: START_BLOG,
  };
}
export function updateBlog(blogs) {
  return {
    type: FETCH_BLOG,
    blogs,
  };
}
export function failBlog(errorMessage) {
  return {
    type: FAIL_BLOG,
    error: errorMessage,
  };
}
