import { SEARCH_SUCCESS } from '../actions/actionTypes';

const initialSearchState = {
  list: {},
  error: null,
  isLoggedin: true,
  inProgress: true,
};
export default function search(state = initialSearchState, action) {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        list: action.list,
        inProgress: false,
      };
    default:
      return state;
  }
}
