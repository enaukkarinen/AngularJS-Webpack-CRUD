
import _ from 'lodash';

class profileService {

    static $inject = ['$http'];
    constructor($http) {
        this.$http = $http;
        this.profiles = [];
        this.api = 'http://localhost:3000/profiles';
    }

    search(queryString) {
        let qString = queryString? this.api + '?' + queryString : this.api;
        return this.$http.get(qString).then(res => {
            this.profiles = res.data;
        }).catch((err) => {
            console.log('ERROR: Initial profile query failed!');
        });
    }
}


export default profileService;
