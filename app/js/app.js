'use strict';

// this is creating the module
var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent', {
            templateUrl: 'templates/NewEvent.html',
            controller: 'EditEventController'
        });
        $routeProvider.when('/events', {
            templateUrl: 'templates/EventList.html',
            controller: 'EventListController'
        });
        $routeProvider.when('/event/:eventId', {
            templateUrl: 'templates/EventDetails.html',
            controller: 'EventController'
        });
        $routeProvider.when('/sampleDirective', {
            templateUrl: 'templates/SampleDirective.html',
            controller: 'SampleDirectiveController'
        });
        $routeProvider.otherwise({ // default route , so if the route is not specified it will goto this one
            redirectTo: '/events'
        });
        $locationProvider.html5Mode(true);

    })
