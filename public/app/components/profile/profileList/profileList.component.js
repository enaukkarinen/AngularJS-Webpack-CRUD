
import angular from 'angular';

export default class ProfileList {

  static $inject = ['profileService'];
  constructor(profileService) {

    this.profileService = profileService;
    
    this.profileService.init().then((res) => {
      this.currentPage = 1;
      this.pageSize = 5;
      this.profiles = this.profileService.profiles;
      this.numberOfPages = Math.ceil(this.profiles.length / this.pageSize);
    });
  }

  range(n) {
    return new Array(n-1);
  }

}
