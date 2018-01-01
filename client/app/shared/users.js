import _ from 'lodash';

const users = ($http, API, $q) => {
  
  let allUsers = [];
  let id = [];

  const get = () => {
    return $http.get(`${API.url}/users`)
      .then(({ data }) => {
        allUsers = data.map(user => {
          console.log(user);
          return user;
        });
      });
  };

  const getOne = (query) => {

    const user = _.find(allUsers, query);

    if (user) {
      // return $q.when to guarantee that we can always
      // call .then
      // This is useful when you are dealing with an object 
      // that might or might not be a promise, or if the 
      // promise comes from a source that can't be trusted.
      return $q.when(user);
    } else {
      let url = `${API.url}/users/${id}`;
      url += query.id
      return $http.get(url)
        .then(({ data }) => {
          console.log(data);          
          return data;
        });
    }
  };

  // get post from factory to controller
  const getState = () => {
    return allUsers;
  };

  return { get, getState, getOne };
};

users.$inject = ['$http', 'API', '$q'];

export { users };