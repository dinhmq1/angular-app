import _ from 'lodash';

class UserDetailsController {
    constructor(Users, Posts, $state) {
      this.user = {};
      this.userPost = {};
      this.Users = Users;
      this.Posts = Posts;
      this.getUsers();
      this.getPosts();
      this.$state = $state;
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
    getUsers() {
      this.Users.get()
        .then(() => {
          this.users = this.Users.getState();
        });
    }
    getPosts() {
      this.Posts.get()
        .then(() => {
          this.posts = this.Posts.getState();
        });
    }
  }
  UserDetailsController.$inject = ['Users', 'Posts', '$state'];

  export {UserDetailsController};
  