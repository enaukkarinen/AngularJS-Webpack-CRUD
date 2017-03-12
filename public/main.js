
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { Observable } from 'rxjs';
console.log(uiRouter)
import './app/components/navbar/navbar.component.js';
import profile from './app/components/profile/profile.module.js';

angular.module('app', ['asd', 'prof', uiRouter])
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('list');
		$stateProvider
			.state('list', {
				name: 'profileList',
				url: '/',
				template: '<profile-list></profile-list>'
			})
			.state('edit', {
				name: 'edit',
				url: '/edit',
				template: '<profile-edit></profile-edit>',
				params: {
					profile: null
				}
			});

		$locationProvider.html5Mode(true);
	}]);


// Extension method to turn ng scope variables in observables
Observable.$watch = function (scope, watchExpression, objectEquality) {
	return Observable.create(function (observer) {
		function listener(newValue, oldValue) {
			observer.next({ oldValue: oldValue, newValue: newValue });
		}

		return scope.$watch(watchExpression, listener, objectEquality);
	});
};