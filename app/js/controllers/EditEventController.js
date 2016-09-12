'use strict';

var EditEventController = function($scope, eventData) {

    $scope.saveEvent = function(event, newEventForm) {

        console.log('newEventForm', newEventForm);
        if (newEventForm.$valid) {
            eventData.save(event)
                .$promise
                .then(
                    function(response) {
                        console.log('success', response);
                    })
                .catch(
                    function(response) {
                        console.log('failure', response);
                    });


        }
    };

    $scope.canceEdit = function() {
        window.location = '/EventDetails.html';
    }

}

eventsApp.controller('EditEventController', ['$scope', 'eventData', EditEventController]);
