import { FETCH_TAG } from '../actions/actionTypes';

const initialTagState = {
  tags: {},
  isTagFetched: false,
};

export default function tag(state = initialTagState, action) {
  switch (action.type) {
    case FETCH_TAG:
      return { tags: action.tags, isTagFetched: true };
    default:
      return state;
  }
}
