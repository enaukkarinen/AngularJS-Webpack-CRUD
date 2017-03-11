
import angular from 'angular';
import './app/components/navbar/navbar.component.js';
import './app/components/profile/profile.component.js';

angular.module('app', ['asd', 'prof']).run(() => {
    console.log('app init');
});

var x = 'sd';