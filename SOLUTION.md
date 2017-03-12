SOLUTION
========

Estimation
----------
Estimated: 7 hours

Spent: 8 hours


Solution
--------

I got rid of bower, and set up a rudimentary webpack build. While the solution is still using the 1.5.10 version of AngularJS, the components are written in ES6 syntax. I also added new application dependencies Angular UI-router, Lodash, Webpack and RxJS. As in the initial setup, the application can be served by running 'npm start'. The webpack binaries are referenced from the local npm packages so no global installations are needed. The project folder structure has also been slighty changed.

The solution relies heavily on the API provided by the json-server package. Ideally I probably would have done much of the data manipulation on the client side without any http-requests, but I understood that the goal of the excercise was to utilize the json-server API as much as possible.

The json-server API also leaves a lot to be desired as the "Full-text search" cannot be used to match a collection of words to more than one object property, For example 'country_name' and 'profile_title' cannot be both targeted on the same query. The application is however able to use multiword parameters in searches as long as the words are contained within a single profile property. Ideally you would also be able to send projection parameters with json-server requests to narrow down the object properties which the client is actually interested of. This would be especially useful in a 'http-request-heavy' application such as this to get smaller json payload on the profilelist-page.

Overall, I enjoyed this little exercise. Obviously the UI's layout and styling is a bit crude, and the profile editing form could use some input validation, but I think the data querying through a single observable 'search-object' works beautifully.

The solution has been tested on OSX Sierra, NodeJs v6.5.0 and NPM v3.10.3 with browsers: Chrome, Firefox and Safari.