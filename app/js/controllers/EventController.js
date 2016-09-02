'use strict';

var EventController = function($scope, eventData, $log, $anchorScroll) {

    // $scope.myClass = "blue";
    // $scope.buttonDisabled = true;
    // $scope.snippet = '<span style="color:red">Hi There !</span>';
    $scope.boolValue = true;
    $scope.myStyle = {
        color: 'red'
    };
    $scope.sortorder = 'name'; // order buy upVoteCount descending
    console.log(eventData);

    $scope.event = eventData.getEvent()
        .$promise
        .then(
            //success
            function(event) {
                $scope.event = event;
                console.log(event);
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

eventsApp.controller('EventController', ['$scope', 'eventData', '$anchorScroll', EventController]);
