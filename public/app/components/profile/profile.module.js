
import angular from 'angular';
import ProfileList from './profileList/profileList.component';
import profileService from './profile.service';

export default angular.module('prof', [])
    .service('profileService', profileService)
    .component('profileList', {
        template: require('./profileList/profileList.html'),
        controller: ProfileList,
        controllerAs: 'pro'
    })
    .filter('startFrom', () => {
        return (input, start) => {
            start = +start;
            return input.slice(start);
        }
    });
