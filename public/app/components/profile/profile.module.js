
import angular from 'angular';
import ProfileList from './profileList/profileList.component';
import ProfileEdit from './ProfileEdit/ProfileEdit.component';
import profileService from './profile.service';
require('./profileList/profileList.scss');

export default angular.module('prof', [])
    .service('profileService', profileService)
    .component('profileList', {
        template: require('./profileList/profileList.html'),
        controller: ProfileList,
        controllerAs: 'pro'
    })
    .component('profileEdit', {
        template: require('./profileEdit/profileEdit.html'),
        controller: ProfileEdit,
        controllerAs: 'ped'
    })
    .filter('startFrom', () => {
        return (input, start) => {
            start = +start;
            return input.slice(start);
        }
    });
