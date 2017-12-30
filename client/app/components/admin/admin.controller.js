import _ from 'lodash';

class AdminController {
    constructor(Posts, $state) {
      this.post = {
        //userId: Math.floor((Math.random() * 20) + 10),
        id: Math.floor((Math.random() * 1500) + 101),
        title: '',        
        body: ''
      };
      this.Posts = Posts;
      this.$state = $state;
    }
  
    // use default params here
    createPost(post = this.post) {
      this.Posts.create(post)
        .then(() => {
          this.post = {};
          //console.log(post.id);
          this.$state.go('success');
        })
        .catch(() => {
          this.post = {};
          //console.log('Failed to post blog!');
          this.$state.go('failure');
        });
    }
  }
  
  AdminController.$inject = ['Posts', '$state'];
  
  export {AdminController};
  