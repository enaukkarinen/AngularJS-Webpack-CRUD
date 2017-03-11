


export default class NavbarController {

  constructor() {
    // console.log('init nav');
  }
}

angular.module('asd', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarController,
    controllerAs: 'nav'
  });
