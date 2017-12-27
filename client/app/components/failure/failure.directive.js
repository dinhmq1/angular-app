import './failure.styl';
import {FailureController as controller} from './failure.controller';
import template from './failure.html';

export const failureDirective = () => {
    return {
        controller,
        template,
        controllerAs: 'vm',
        scope: {},
        replace: true,
        restrict: 'E'
    }
};
