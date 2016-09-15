'use strict';

eventsApp.directive('upvote', function() {
    return {
        restrict: 'E',
        templateUrl: '/templates/directives/upvote.html',
        scope: {
            upvote: "&", // the & says that we are passing in a function that we are going to execute within the parent scope
            downvote: "&", // the & says that we are passing in a function that we are going to execute within the parent scope
            count: "=",
        }
    }

})
