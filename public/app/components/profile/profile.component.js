

export default class ProfileController { 
 
    constructor()
    {
        console.log('init prof');
    }
}

angular.module('prof', [])
  .component('profile', {
    template: require('./profile.html'),
    controller: ProfileController,
    controllerAs: 'pro'
  });
