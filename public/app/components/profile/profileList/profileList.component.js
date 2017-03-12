
import angular from 'angular';
import { Observable } from 'rxjs';

export default class ProfileList {

  static $inject = ['$scope', '$state', '$timeout', 'profileService'];
  constructor($scope, $state, $timeout, profileService) {
    this.$scope = $scope;
    this.$state = $state;
    this.$timeout = $timeout;
    this.profileService = profileService;
    this.thumbnailUri = 'http://img.businessoffashion.com/50/50/magic/';
    this.isBusy = true;
    this.initObservables();
    this.searchObject = { pageNumber: undefined };

    // init first query
    this.$timeout(() => {
      this.searchObject.pageNumber = 1;
    });
  }

  initObservables() {
    // search tools
    var dueToPageChange = false;
    Observable.$watch(this.$scope, () => this.searchObject, true)
      .debounceTime(500)
      .do(() => {
        dueToPageChange = false;
      })
      .filter((vObj) => {
        var hasChanged = _.some(vObj.newValue, (value, key) => {
          if (key === 'pageNumber') {
            if (value !== null && value !== vObj.oldValue[key]) {
              dueToPageChange = true;
              return true;
            } else {
              return false;
            }
          }
          return value !== vObj.oldValue[key];
        });
        console.log(hasChanged);
        return hasChanged;
      })
      .map((valueObj) => {
        return this.createSearchString(valueObj.newValue)
      })
      .subscribe((query) => {
        this.isBusy = true;
        this.profileService.search(query).then(() => {

          // simulate latency
          this.$timeout(() => {
            this.profileCount = this.profileService.totalProfileCount;

            // reset view to first page
            if (!dueToPageChange) {
              this.searchObject.pageNumber = null;
            }
            this.isBusy = false;
          }, Math.floor((Math.random() * 500) + 250));
        });
      });
  }

  createSearchString(searchObj) {

    let searchString = `?_page=${searchObj.pageNumber || 1}&`;

    if (searchObj.searchWord && searchObj.searchWord.length > 0) {

      searchString += 'q=';
      let words = searchObj.searchWord.split(' ');

      searchString += words.length > 1 ?
        _.map(words, w => w.trim()).join('%20') : words[0].trim();

      searchString += '&';
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

    return searchString.substring(0, searchString.length - 1);
  }

  createPaginationString(pageNumber) {
    return;
  }

  edit(profile) {
    this.$state.go('edit', { profile });
  }

  range(n) {
    if (this.profileService.totalProfileCount && this.profileService.totalProfileCount > 0) {
      return new Array(Math.ceil(this.profileService.totalProfileCount / this.profileService.pageSize) - 1);
    } else {
      return undefined;
    }
  }

}

