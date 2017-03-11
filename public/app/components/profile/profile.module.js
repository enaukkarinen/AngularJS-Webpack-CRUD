
// import angular from 'angular';
// import routing from './example.route';
// import component from './example.component';
// import service from './example.service';
import Profile from './profile.component';
import SearchSideBar from './searchSideBar.component';
import profileService from './profile.service';

export default angular.module('prof', [])
    .service('profileService', profileService)
    .component('profile', {
        template: require('./profile.html'),
        controller: Profile,
        controllerAs: 'pro'
    })
    .component('searchSideBar', {
        template: require('./searchSideBar.html'),
        controller: SearchSideBar,
        controllerAs: 'pro'
    });