'use strict';

eventsApp.directive('eventThumbnail', function() {
    return {
        restrict: 'E',
        replace: true, // will remove/replace the directive element from the html ...eg the <event-thumbail> bit with the html from the template
        templateUrl: '/templates/directives/eventThumbnail.html'
    }


})
