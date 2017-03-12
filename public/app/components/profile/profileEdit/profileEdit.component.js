
import angular from 'angular';
import { Observable } from 'rxjs';
import _ from 'lodash';
require('./profileEdit.scss');

export default class ProfileEdit {

    static $inject = ['$scope', '$state', '$timeout', 'profileService'];
    constructor($scope, $state, $timeout, profileService) {
        this.thumbnailUri = 'http://img.businessoffashion.com/50/50/magic/';
        this.$state = $state;
        this.$timeout = $timeout;
        this.profileService = profileService;
        this.profile = _.extend({}, this.$state.params.profile, true);
    }

    submit() {
        this.errorMessage = null;
        this.isBusy = true;
        this.profileService.save(this.profile)
            .then(r => {
                // simulate latency
                this.$timeout(() => {
                    this.isBusy = false;
                    this.$state.go('list');
                }, 1000);
            }).catch(err => {
                console.log(err);
                this.isBusy = false;
                this.errorMessage = err.message;
            })
    }
}

