import _ from 'lodash';

class UserController {
  constructor(Users) {
    this.msg = 'All Users';
    this.Users = Users;
    this.getUsers();
    this.search = '';
    this.editHere = {};
  }
  getUsers() {
    this.Users.get()
      .then(() => {
        this.users = this.Users.getState();
      });
  }
  editUserDetails(user = this.user) {
    this.Users.edit(user)
      .then(() => {
        console.log(user);
      })
      .catch(function(error) {
        console.log('Fetch Error :-S', error);
      });
  }
}

UserController.$inject = ['Users'];

export { UserController };