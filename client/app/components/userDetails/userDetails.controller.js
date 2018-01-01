import _ from 'lodash';

class UserDetailsController {
    constructor(Users, $state) {
      this.user = {};
      this.Users = Users;
      this.$state = $state;
    }
    editUserDetails(user = this.user) {
      this.Users.edit(user)
        .then(() => {
          console.log(user);
          // this.user = {
          //   user: user.id,
          //   user: user.name
          // };
        })
        .catch(function(error) {
          console.log('Fetch Error :-S', error);
        });
    }
  }
  UserDetailsController.$inject = ['Users', '$state'];

  export {UserDetailsController};
  