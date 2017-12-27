import _ from 'lodash';
// importing images using the file loader in webpack
// catpic will be the path to the emitted photo
//import catpic from '../../../images/cats.jpg';

class BlogController {
  constructor(Posts) {
    //constcatpic = 'http://placehold.it/150/92c952';
    this.message = 'The latest from the blog';
    // this.catpic = catpic;
    
    this.Posts = Posts;
    this.getPosts();
 
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
