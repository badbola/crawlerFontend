import { FETCH_HISTORY } from '../actions/actionTypes';
const initialHistoryState = {
  history: {},
  isHistory: false,
};
export default function history(state = initialHistoryState, action) {
  switch (action.type) {
    case FETCH_HISTORY:
      return { history: action.history, isHistory: true };
    default:
      return state;
  }
}
