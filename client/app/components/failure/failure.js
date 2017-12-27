import {failureDirective} from './failure.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';


export const failure = angular.module('failure', [uiRouter])
    .config(($stateProvider) => {
        $stateProvider.state('failure', {
            url: '/failure',
            template: '<failure></failure>'
        })
    })
    .directive('failure', failureDirective);
