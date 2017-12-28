import _ from 'lodash';

const posts = ($http, API, $q) => {
  let allPosts = [];
  let id = 0;

  const get = () => {
    return $http.get(`${API.url}/posts?_sort=id&_order=ASC`)
      .then(({data}) => {
        allPosts = data.map(post => {
        // regex: replace each space character with a '-'
        // g flag replace all occurances
        post.slug = post.title.replace(/\s+/g, '-');
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
      let url = `${API.url}/posts`;

      if (query.id) {
        
        url += `${query.id}`
      } else if (query.title) {
        url += `?title=${query.title}`
      }

      return $http.get(url)
        .then(({data}) => {
          return data[0];
        });
    }
  };

  const getState = () => {
    return allPosts;
  };

  const create = (data) => {
    data.id = data.id || ++id;
    console.log(data);
    data.createdAt = new Date().toString();
    return $http({
      data,
      url: `${API.url}/posts`,
      method: 'POST'
    });
  };

  return {get, getOne, getState, create};
};

posts.$inject = ['$http', 'API', '$q'];

export {posts};