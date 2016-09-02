'use strict';

eventsApp.controller('TimeoutSampleController',
    function TimeoutSampleController($scope, $timeout) {

        var promise = $timeout(function() {
            $scope.name = "john Doe";
        }, 3000)

        $scope.cancel = function() {
            $timeout.cancel(promise);
        };
    }
);
