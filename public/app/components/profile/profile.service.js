
import _ from 'lodash';

class profileService {
    constructor($http) {
        this.$http = $http;
    }

    init() {
        this.profiles = [];
        return this.$http.get('http://localhost:3000/profiles').then(res => {
            this.profiles = res.data;
            console.log(this.profiles);
            return this.profiles;
        }).catch((err) => {
            console.log('ERROR: Initial profile query failed!');
        });
    }
}

profileService.$inject = ['$http'];

export default profileService;
