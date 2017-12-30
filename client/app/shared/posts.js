import _ from 'lodash';

const posts = ($http, API, $q) => {
  let allPosts = [];
  let id = [];

  const get = () => {
    return $http.get(`${API.url}/posts?_sort=views&_order=asc`)
      .then(({ data }) => {
        allPosts = data.map(post => {
          // regex: replace each space character with a '-'
          // g flag replace all occurances
          post = post.id;
          return post;
        });
      });
  };

  const getOne = (query) => {

    const post = _.find(allPosts, query);

    if (post) {
      // return $q.when to guarantee that we can always
      // call .then
      // This is useful when you are dealing with an object 
      // that might or might not be a promise, or if the 
      // promise comes from a source that can't be trusted.
      return $q.when(post);
    } else {
      let url = `${API.url}/posts/${id}`;
      url += query.id
      return $http.get(url)
        .then(({ data }) => {
          return data;
        });
    }
  };

  const create = (data) => {
    data.id = data.id || ++id;
    data.createdAt = new Date().toString();
    return $http({
      data,
      url: `${API.url}/posts`,
      method: 'POST'
    });
  };

  return { get, getOne, getState, create };
};

// get post from factory to controller
const getState = () => {
  return allPosts;
};

posts.$inject = ['$http', 'API', '$q'];

export { posts };