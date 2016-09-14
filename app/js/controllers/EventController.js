'use strict';

var EventController = function($scope, eventData, $log, $anchorScroll, $routeParams, $route) {

    // $scope.myClass = "blue";
    // $scope.buttonDisabled = true;
    // $scope.snippet = '<span style="color:red">Hi There !</span>';
    $scope.boolValue = true;
    $scope.myStyle = {
        color: 'red'
    };
    $scope.sortorder = 'name'; // order buy upVoteCount descending


    // a function to reload the single page....not that whole app
    $scope.Reload = function() {
        $route.reload();
    };

    $scope.event = eventData.getEvent($routeParams.eventId)
        .$promise
        .then(
            //success
            function(event) {
                $scope.event = event;
                console.log('event', event);
            })
        .catch(
            //failure
            function(response) {
                console.log(response);
            });

    $scope.upVoteSession = function(session) {
        session.upVoteCount++
    };

    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    };

    $scope.scrollToSession = function() {
        $anchorScroll();
    };

};

eventsApp.controller('EventController', ['$scope', 'eventData', '$log', '$anchorScroll', '$routeParams', '$route', EventController]);
