import { APIurls } from '../helper/url';

const { FETCH_HISTORY } = require('./actionTypes');

export function fetchHistory() {
  return (dispatch) => {
    const url = APIurls.fetchHistory();
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
        console.log(data.history);
        dispatch(updateHistory(data.history));
      });
  };
}
export function updateHistory(history) {
  return {
    type: FETCH_HISTORY,
    history,
  };
}
