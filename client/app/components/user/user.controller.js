import _ from 'lodash';

class UserController {
  constructor(Users) {
    this.msg = 'All Users';
    this.Users = Users;
    this.getUsers();
    this.search = '';
  }
  getUsers() {
    this.Users.get()
      .then(() => {
        this.users = this.Users.getState();
      });
  }
}

UserController.$inject = ['Users'];

export { UserController };