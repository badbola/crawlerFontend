import { FETCH_BLOG } from '../actions/actionTypes';

const initalBlogState = {
  resp: {},
  isFetched: false,
};

export default function blog(state = initalBlogState, action) {
  switch (action.type) {
    case FETCH_BLOG:
      return { resp: action.resp, isFetched: true };
    default:
      return state;
  }
}
