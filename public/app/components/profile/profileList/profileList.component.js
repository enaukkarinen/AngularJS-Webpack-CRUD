
import angular from 'angular';
import { Observable } from 'rxjs';

export default class ProfileList {

  static $inject = ['$scope', '$state', 'profileService'];
  constructor($scope, $state, profileService) {
    this.$scope = $scope;
    this.$state = $state;
    this.profileService = profileService;
    this.thumbnailUri = 'http://img.businessoffashion.com/50/50/magic/';
    this.currentPage = 1;
    this.pageSize = 10;

    this.searchObject = {};
    this.profileService.search();

    Observable.$watch(this.$scope, () => this.searchObject, true)
      .debounceTime(500)
      // .distinctUntilChanged() broken?
      .filter((valueObj) => {
        let areEqual = angular.equals(valueObj.newValue, valueObj.oldValue);
        return !areEqual;
      })
      .map((valueObj) => {
        return this.createSearchString(valueObj.newValue)
      })
      .subscribe((query) => {
        this.profileService.search(query).then(() => {
          this.currentPage = 1;
        });
      });
  }

  createSearchString(searchObj) {
    let searchString = '';
    if (searchObj.searchWord) {
      // hack for multiword searches
      let firstWord = searchObj.searchWord.split(' ')[0].trim();
      searchString += `q=${firstWord}&`
    }
    if (searchObj.enabledTrue !== searchObj.enabledFalse) {
      if (searchObj.enabledTrue === true) {
        searchString += 'is_enabled=true&'
      } else if (searchObj.enabledFalse === true) {
        searchString += 'is_enabled=false&'
      }
    }

    if (searchObj.visibleTrue !== searchObj.visibleFalse) {
      if (searchObj.visibleTrue === true) {
        searchString += 'is_visible=true&'
      } else if (searchObj.visibleFalse === true) {
        searchString += 'is_visible=false&'
      }
    }

    return searchString.substring(0, searchString.length - 1);;
  }

  edit(profile) {
    this.$state.go('edit', {profile});
  }
  range(n) {
    if (this.profileService.profiles && this.profileService.profiles.length > 0) {
      return new Array(Math.ceil(this.profileService.profiles.length / this.pageSize) - 1);
    } else return undefined;
  }

}

