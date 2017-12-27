import './success.styl';
import {SuccessController as controller} from './success.controller';
import template from './success.html';

export const successDirective = () => {
    return {
        controller,
        template,
        controllerAs: 'vm',
        scope: {},
        replace: true,
        restrict: 'E'
    }
};
