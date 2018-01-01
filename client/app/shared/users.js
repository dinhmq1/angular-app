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


  // get post from factory to controller
  const getState = () => {
    return allUsers;
  };

  return { get, getState };
};

users.$inject = ['$http', 'API', '$q'];

export { users };