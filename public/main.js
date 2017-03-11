
import angular from 'angular';
import { Observable } from 'rxjs';

import './app/components/navbar/navbar.component.js';
import './app/components/profile/profile.module.js';

angular.module('app', ['asd', 'prof']).run(() => {
    console.log('app init');
});


// Extension method to turn ng scope variables in observables
Observable.$watch = function (scope, watchExpression, objectEquality) {
    return Observable.create(function (observer) {
        function listener(newValue, oldValue) {
            observer.next({ oldValue: oldValue, newValue: newValue });
        }

        return scope.$watch(watchExpression, listener, objectEquality);
    });
};