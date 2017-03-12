
import _ from 'lodash';

class profileService {

    static $inject = ['$http'];
    constructor($http) {
        this.$http = $http;
        this.profiles = [];
        this.api = 'http://localhost:3000/profiles';
        this.thumbnailUri = 'http://img.businessoffashion.com/50/50/magic/';
        this.pageSize = 10;
    }

    search(queryString) {
        let qString = this.api;
        if (queryString) {
            qString += queryString;
        }

        return this.$http.get(qString).then((res) => {
            this.totalProfileCount = res.headers()['x-total-count'];
            this.profiles = res.data;
        }).catch((err) => {
            console.log('ERROR: Initial profile query failed!');
        });
    }

    save(profile) {
        return this.$http.put(this.api + '/' + profile.id, profile,
            { headers: { 'Content-Type': 'application/json; charset=UTF-8' } })
            .then((res) => {
                console.log(res);
            });
    }
}


export default profileService;
