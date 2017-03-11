
import angular from 'angular';
// import ProfileService from './profile.service';
// import './searchSideBar/searchSideBar.component';

export default class Profile {

  static $inject = ['profileService'];
  constructor(profileService) {
    this.profileService = profileService;
    this.profileService.title();
  }
}

// angular.module('prof', [])
//   .component('profile', {
//     template: require('./profile.html'),
//     controller: ProfileController,
//     controllerAs: 'pro'
//   });
