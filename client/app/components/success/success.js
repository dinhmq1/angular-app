import {successDirective} from './success.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';


export const success = angular.module('success', [uiRouter])
    .config(($stateProvider) => {
        $stateProvider.state('success', {
            url: '/success',
            template: '<success></success>'
        })
    })
    .directive('success', successDirective);
