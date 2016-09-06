'use strict';

// this is creating the module
var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/newEvent', {
            tempaltUrl: 'tempaltes/NewEvent.html',
            controller: 'EditEventController'
        })
    })
