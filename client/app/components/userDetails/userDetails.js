import {userDetailsDirective} from './userDetails.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const userDetails = angular.module('userDetails', [uiRouter])
  .config(function($stateProvider) {
    $stateProvider.state('userDetails', {
      url: '/userDetails/:id',
      template: '<user-details user="user"></user-details>',
      controller: function($scope, user) {
        $scope.user = user;
      },
      resolve: {
        user: function(Users, $stateParams) {
          let {id} = $stateParams;
          return Users.getOne({id});
        }
      }
    });
  })
  .directive('userDetails', userDetailsDirective)
