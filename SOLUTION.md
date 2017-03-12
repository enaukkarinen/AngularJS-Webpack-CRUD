SOLUTION
========

Estimation
----------
Estimated: 7 hours

Spent: 8 hours


Solution
--------
Comments on your solution

I got rid of bower, and set up a rudimentary webpack build. While the solution is still using the 1.5.10 version of AngularJS, the components are written in ES6 syntax. I also added new application dependencies Angular UI-router, Lodash, Webpack and RxJS. As in the initial setup, the application can be served by running 'npm start'. The webpack binaries are referenced from the local npm packages so no global installations are needed. The project folder structure has also been slighty changed.

The solution relies heavily on the API provided by the json-server package. Ideally I probably would have done much of the data manipulation on the client side without any http-requests, but I understood that the goal of the excercise was to utilize the json-server API as much as possible.

The solution has been tested on OSX Sierra with browsers: Chrome, Firefox and Safari.