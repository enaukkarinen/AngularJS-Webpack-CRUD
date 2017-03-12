
import angular from 'angular';
import { Observable } from 'rxjs';
import _ from 'lodash';
require('./profileEdit.scss');

export default class ProfileEdit {

    static $inject = ['$scope', '$state', 'profileService'];
    constructor($scope, $state, profileService) {
        this.thumbnailUri = 'http://img.businessoffashion.com/50/50/magic/';
        this.$state = $state;
        this.profile = _.extend({}, this.$state.params.profile, true);
        console.log(this.profile);
    }
}

