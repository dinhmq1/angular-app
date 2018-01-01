import './userDetails.styl';
import {UserDetailsController as controller} from './userDetails.controller';
import template from './userDetails.html';

export const userDetailsDirective = () => {
    return {
        controller,
        template,
        controllerAs: 'vm',
        scope: {
        user: '='
        },
        replace: true,
        restrict: 'E'
    }
};
