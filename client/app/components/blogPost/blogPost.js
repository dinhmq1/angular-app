import {blogPostDirective} from './blogPost.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const blogPost = angular.module('blogPost', [uiRouter])
  .config(function($stateProvider) {
    $stateProvider.state('blogPost', {
      url: '/postDetails/:id',
      // setup attr to accept post from controller
      template: '<blog-post post="post"></blog-post>',
      // one off controller for resolving
      // dont use es6 arrow functions
      //  context will screw-up.
      // use the old function keyword!
      controller: function($scope, post) {
        // bind to scope to pass into component
        $scope.post = post;
      },

      resolve: {
        post: function(Posts, $stateParams) {
          let {id} = $stateParams;
          //id = this.id;
          return Posts.getOne({id});
          // get the cpost based on title
          // in url
          // let {id} = $stateParams;
          // id = id.replace(/\-+/g, ' ');
          // return Posts.getOne({id});
        }
      }
    });
  })
  .directive('blogPost', blogPostDirective)
