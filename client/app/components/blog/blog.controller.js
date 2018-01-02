import _ from 'lodash';

class BlogController {
  constructor(Posts, Users) {
    this.message = 'Just start typing to search for posts!';
    this.users = {};
    this.Users = Users;
    this.getUsers();
    this.Posts = Posts;
    this.getPosts();
    // initiate search property because 
    // we're using controllerAs
    this.search = '';
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

BlogController.$inject = ['Posts', 'Users'];

export {BlogController};
