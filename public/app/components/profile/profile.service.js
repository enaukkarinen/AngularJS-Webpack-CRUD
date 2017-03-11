

class profileService {
    constructor($http) {
        this.$http = $http;
        this.$http.get('http://localhost:3000/profiles').then(res => {
            this.profiles = res.data;
            console.log(this.profiles);
        })
        .catch((err) => {
            console.log('ERROR: Initial profile query failed!');
        });

    }

    title() {
        console.log('foo');
    }
}

profileService.$inject = ['$http'];

export default profileService;
