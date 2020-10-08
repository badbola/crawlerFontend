import { combineReducers } from 'redux';
import users from './users';
import auth from './auth';
import search from './search';
import blog from './blog';

export default combineReducers({
  users,
  auth,
  blog,
  search,
});
