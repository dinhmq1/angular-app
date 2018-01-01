import {userDirective} from './user.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';


export const user = angular.module('user', [uiRouter])
    .config(($stateProvider) => {
        $stateProvider.state('user', {
            url: '/users',
            template: '<user></user>'
        })
    })
    .directive('user', userDirective);
