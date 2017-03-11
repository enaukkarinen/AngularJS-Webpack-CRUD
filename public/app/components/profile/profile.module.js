
import angular from 'angular';
import ProfileList from './profileList/profileList.component';
import SearchTool from './searchTool/searchTool.component';
import profileService from './profile.service';

export default angular.module('prof', [])
    .service('profileService', profileService)
    .component('profileList', {
        template: require('./profileList/profileList.html'),
        controller: ProfileList,
        controllerAs: 'pro'
    })
    .component('searchTool', {
        template: require('./searchTool/SearchTool.html'),
        controller: SearchTool,
        controllerAs: 'src'
    })
    .filter('startFrom', function () {
        return function (input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    });
