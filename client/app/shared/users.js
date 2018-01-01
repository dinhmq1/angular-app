import _ from 'lodash';

const users = ($http, API, $q) => {
  
  let allUsers = [];
  let id = [];

  const get = () => {
    return $http.get(`${API.url}/users`)
      .then(({ data }) => {
        allUsers = data.map(user => {
          return user;
        });
      });
  };

  const getOne = (query) => {

    const user = _.find(allUsers, query);

    if (user) {
      return $q.when(user);
    } else {
      let url = `${API.url}/users/${id}`;
      url += query.id
      return $http.get(url)
        .then(({ data }) => {
          return data;
        });
    }
  };
  const getState = () => {
    return allUsers;
  };
  const edit = (data) => {
    data.id = data.id || ++id;
    data.createdAt = new Date().toString();
    return $http({
      data,
      url: `${API.url}/users/${data.id}`,
      method: 'PUT'
    });
  };
  return { get, getState, getOne, edit };
};

users.$inject = ['$http', 'API', '$q'];

export { users };