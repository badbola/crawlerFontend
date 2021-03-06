export const APIurls = {
  login: () => 'http://localhost:8000/user/signin',
  signup: () => 'http://localhost:8000/user/signup',
  fetchUsers: () => 'http://localhost:8000/user/all',
  search: (query) => `http://localhost:8000/q/${query}`,
  fetchTag: (tag) => `http://localhost:8000/post/${tag}`,
  fetchHistory: () => 'http://localhost:8000/q/history/show',
};
