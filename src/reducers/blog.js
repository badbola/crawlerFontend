import { FAIL_BLOG, FETCH_BLOG, START_BLOG } from '../actions/actionTypes';

const initialFetchState = {
  blogs: {},
  error: null,
  isLoggedin: true,
  isFetched: false,
  isStarted: false,
};

export default function blog(state = initialFetchState, action) {
  switch (action.type) {
    case START_BLOG:
      return {
        ...state,
        isStarted: true,
      };
    case FETCH_BLOG:
      return {
        ...state,
        blogs: action.blogs,
        isFetched: true,
      };
    case FAIL_BLOG:
      return {
        ...state,
        isStarted: false,
        isFetched: false,
        error: action.error,
      };
    default:
      return state;
  }
}
