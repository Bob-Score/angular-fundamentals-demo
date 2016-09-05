'use strict';

// this is creating the module
var eventsApp = angular.module('eventsApp', ['ngResource', /*'ngCookies'*/ ])
    .factory('myCache', function($cacheFactory) {
        return $cacheFactory('myCache', {
            capacity: 3
        });
    });
