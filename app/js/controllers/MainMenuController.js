'use strict';

var MainMenuController = function($scope, $location) {

    console.log('absUrl', $location.absUrl());
    console.log('protocol', $location.protocol());
    console.log('port', $location.port());
    console.log('host', $location.host());
    console.log('path', $location.path());
    console.log('search', $location.search()); // the querystring part of the url...so anything after the ? in the url
    console.log('hash', $location.hash()); //what ever comes after the # in the url
    console.log('url', $location.url());

    // the last 4 are read writeable


    $scope.createEvent = function() {

        $location.url('/newEvent');

    };

}


eventsApp.controller('MainMenuController', ['$scope', '$location', MainMenuController]);
