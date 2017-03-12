
import _ from 'lodash';

class profileService {

    static $inject = ['$http'];
    constructor($http) {
        this.$http = $http;
        this.profiles = [];
        this.getUri = 'http://localhost:3000/profiles';
        this.postUri = 'http://localhost:3000/profiles';
    }

    search(queryString) {
        let qString = queryString ? this.getUri + '?' + queryString : this.getUri;
        return this.$http.get(qString).then(res => {
            this.profiles = res.data;
        }).catch((err) => {
            console.log('ERROR: Initial profile query failed!');
        });
    }

    save(profile) {
        return this.$http.put(this.postUri + '/' + profile.id, profile,
            { headers: { 'Content-Type': 'application/json; charset=UTF-8' } })
            .then((res) => {
                console.log(res);
            });
    }
}


export default profileService;
