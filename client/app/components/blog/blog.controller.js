import _ from 'lodash';

class BlogController {
  constructor(Posts) {
    this.message = 'Just start typing to search for posts!';
    
    this.Posts = Posts;
    this.getPosts();
    // initiate search property because 
    // we're using controllerAs
    this.search = '';
  }

  getPosts() {
    this.Posts.get()
      .then(() => {
        this.posts = this.Posts.getState();
      });
  }
}

BlogController.$inject = ['Posts'];

export {BlogController};
